---
title: "Cómo Configurar un Clúster de Alta Disponibilidad (HA) en Linux con Pacemaker, Corosync e iSCSI"
description: "Guía detallada paso a paso para configurar un clúster de alta disponibilidad en Linux utilizando Pacemaker, Corosync e iSCSI, asegurando continuidad de servicio para máquinas virtuales y almacenamiento compartido."
date: "2024-12-06"
image: '/assets/images/post/cluster-de-alta-disponibilidad-con-pacemaker-corosync/banner.webp'
author: "Mariano García Guzmán"
category: "Infraestructura de Servicios"
keywords: ["alta disponibilidad", "Pacemaker", "Corosync", "iSCSI", "clúster", "Linux", "Ubuntu", "Virt-Manager", "KVM", "QEMU"]
excerpt: "Aprende cómo configurar un clúster de alta disponibilidad (HA) en Linux con herramientas como Pacemaker, Corosync e iSCSI. Esta guía asegura continuidad del servicio incluso en caso de fallos en uno de los nodos."
status: "published"
---

## Cómo Configurar un Clúster de Alta Disponibilidad (HA) en Linux con Pacemaker, Corosync e iSCSI

En este artículo, exploraremos cómo configurar un clúster de alta disponibilidad en Linux utilizando herramientas como **Pacemaker**, **Corosync**, y **almacenamiento compartido iSCSI**, mientras integramos máquinas virtuales (VMs) como recursos gestionados por el clúster. Este es un ejemplo práctico de cómo garantizar la continuidad del servicio, incluso en caso de fallos en uno de los nodos.

---

## Introducción a las herramientas utilizadas

1. **Pacemaker**  
   Es el administrador de recursos principal del clúster. Supervisa y gestiona los recursos (como IPs, almacenamiento, y servicios) asegurando que siempre estén disponibles y que puedan ser migrados automáticamente entre nodos en caso de fallo.

2. **Corosync**  
   Es el motor de mensajería del clúster. Proporciona la comunicación entre nodos, permitiendo a Pacemaker supervisar su estado y coordinar la transferencia de recursos.

3. **iSCSI (Internet Small Computer Systems Interface)**  
   Permite conectar almacenamiento remoto a través de una red. En este caso, utilizamos iSCSI para configurar almacenamiento compartido entre los nodos del clúster, asegurando que los datos de nuestras máquinas virtuales estén disponibles para todos los nodos.

4. **Virt-Manager y KVM/QEMU**  
   Virt-Manager es una interfaz gráfica para gestionar máquinas virtuales basadas en KVM/QEMU. KVM (Kernel-based Virtual Machine) convierte el kernel de Linux en un hipervisor, mientras que QEMU permite la emulación y virtualización.

5. **Filesystem (OCF Agent)**  
   Este agente asegura que los puntos de montaje críticos del almacenamiento compartido (como los discos iSCSI) estén activos y disponibles antes de iniciar servicios que dependan de ellos.

---

## Requisitos previos

- Dos nodos Linux con Ubuntu Server instalados y accesibles por red.
- Almacenamiento compartido configurado con iSCSI (en nuestro ejemplo, utilizamos un servidor TrueNAS).
- Una máquina virtual preinstalada en uno de los nodos.

---

## Guía paso a paso

### 1. Configuración de la GUI y Virt-Manager
Si estás utilizando un servidor Ubuntu, primero instala una GUI ligera (XFCE) y Virt-Manager para gestionar máquinas virtuales:

```bash
sudo apt update
sudo apt install xfce4 xfce4-goodies virt-manager qemu-kvm -y
sudo systemctl set-default graphical.target
sudo reboot
```

---

### 2. Configuración del almacenamiento iSCSI

1. **Descubrir el objetivo iSCSI desde TrueNAS**:
   ```bash
   sudo iscsiadm -m discovery -t sendtargets -p <IP_del_servidor_iSCSI>
   ```

2. **Conectar al objetivo iSCSI**:
   ```bash
   sudo iscsiadm -m node --login
   ```

3. **Formatear y montar el disco iSCSI**:
   ```bash
   sudo mkfs.ext4 /dev/sdb
   sudo mkdir -p /mnt/shared_storage
   sudo mount /dev/sdb /mnt/shared_storage
   echo "/dev/sdb /mnt/shared_storage ext4 defaults,_netdev 0 0" | sudo tee -a /etc/fstab
   ```

---

### 3. Instalación de Pacemaker y Corosync

En ambos nodos, instala y habilita los servicios necesarios:
```bash
sudo apt install pacemaker corosync pcs -y
sudo systemctl enable --now corosync pacemaker pcsd
sudo passwd hacluster
```

---

### 4. Configuración del clúster

1. **Autentica ambos nodos desde el nodo principal**:
   ```bash
   sudo pcs cluster auth nodo1 nodo2 -u hacluster
   ```

2. **Crea y arranca el clúster**:
   ```bash
   sudo pcs cluster setup --name opencart_cluster nodo1 nodo2
   sudo pcs cluster start --all
   sudo pcs cluster enable --all
   ```

3. **Verifica el estado del clúster**:
   ```bash
   sudo pcs status
   ```

---

### 5. Configuración de recursos

#### 5.1. Almacenamiento compartido
Añade el almacenamiento compartido como recurso del clúster:
```bash
sudo pcs resource create shared_storage Filesystem \
    device="/dev/sdb" directory="/mnt/shared_storage" fstype="ext4" \
    op monitor interval=30s
```

#### 5.2. Máquina virtual
1. **Exporta la configuración de la VM**:
   ```bash
   sudo virsh dumpxml <nombre_vm> > /etc/libvirt/qemu/<nombre_vm>.xml
   ```

2. **Añade la VM como recurso del clúster**:
   ```bash
   sudo pcs resource create vm_opencart ocf:heartbeat:VirtualDomain \
       params config="/etc/libvirt/qemu/<nombre_vm>.xml" \
       hypervisor="qemu:///system" \
       meta allow-migrate=true \
       op monitor interval=30s
   ```

#### 5.3. Dirección IP flotante
Añade una IP flotante al clúster:
```bash
sudo pcs resource create virtual_ip ocf:heartbeat:IPaddr2 \
    ip=192.168.100.200 cidr_netmask=24 op monitor interval=30s
```

---

### 6. Configuración de restricciones

1. **Asegura que la VM esté en el nodo con almacenamiento activo**:
   ```bash
   sudo pcs constraint colocation add vm_opencart with shared_storage INFINITY
   ```

2. **Configura el orden de inicio**:
   ```bash
   sudo pcs constraint order start shared_storage then start vm_opencart
   ```

---

### 7. Simulación de la falla

1. Verifica el estado actual del clúster:
   ```bash
   sudo pcs status
   ```

2. Apaga el nodo principal:
   ```bash
   sudo systemctl stop pacemaker
   ```

3. Verifica que los recursos se migren automáticamente al nodo secundario:
   ```bash
   sudo pcs status
   ```

4. Reactiva el nodo principal y verifica que se reincorpore al clúster:
   ```bash
   sudo systemctl start pacemaker
   sudo pcs status
   ```

---

## Resumen

En esta guía, configuramos un clúster de alta disponibilidad que gestiona una máquina virtual y un almacenamiento compartido, asegurando que los servicios permanezcan disponibles incluso si uno de los nodos falla. Las herramientas utilizadas, como Pacemaker, Corosync y iSCSI, trabajan juntas para garantizar la continuidad del servicio ¡Mucha suerte!

Si tienes preguntas adicionales o necesitas más aclaraciones sobre algún paso, ¡déjame saberlo! 