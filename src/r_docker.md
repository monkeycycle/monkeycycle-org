## RStudio on Digital Ocean with Docker



1. Create a new droplet, attached a ext4 volume and SSH keys.

2. SSH to new droplet ```ssh -i ~/.ssh/digitalocean root@IP_address```
3. Install ```sudo apt-get install screen```
4. Configure the attached volume to mount on reboot

```
# Create a mount point for your volume:
mkdir -p /mnt/volume_tor1_01

# Mount your volume at the newly-created mount point:
mount -o discard,defaults,noatime /dev/disk/by-id/scsi-0DO_Volume_volume-tor1-02 /mnt/volume_tor1_01

# Change fstab so the volume will be mounted after a reboot
echo '/dev/disk/by-id/scsi-0DO_Volume_volume-tor1-02 /mnt/volume_tor1_02 ext4 defaults,nofail,discard 0 0' | sudo tee -a /etc/fstab
```
```


5. Create a new user ```useradd -g users -G docker -m -s /bin/bash wfpnews```

6. Switch to the new user ```su wfpnews```

7. Clone the project repo ```git clone https://github.com/monkeycycle/covid19_analysis.git```

8. Add a ``.env` file in the project directory to include vars during build. 

9. Build the image ```docker build --rm --force-rm -t some-container-name .```

	```docker build  --no-cache=true --rm --force-rm -t covid19_analysis .```

10. Start the Docker image passing along a password for the main user
	```docker run -d --rm -p 28787:8787 --name covid19_analysis -e USERID=$UID -e PASSWORD="filly Cobra 2 hobby rave" -v $DATA_DIR:/home/wfpnews covid19_analysis




### Misc Docker commands

List containers with container IDs
​```docker container ls -a```

Stop all containers
​```docker container stop $(docker container ls -aq)```

Remove a container
​```docker container rm CONTAINERID```









