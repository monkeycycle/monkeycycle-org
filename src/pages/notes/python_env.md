## Setting Up Your Environment

In this section, you’ll learn how to set up your environment. You’ll cover the following topics:

1. Creating a virtual environment
2. Installing plotnine
3. Installing Juptyer Notebook

**Virtual environments** enable you to install packages  in isolated environments. They’re very useful when you want to try some  packages or projects without messing with your system-wide installation. You can learn more about them in [Python Virtual Environments: A Primer](https://realpython.com/python-virtual-environments-a-primer/).

Run the following commands to create a directory named `data-visualization` and a virtual environment inside it:

```
$ mkdir data-visualization
$ cd data-visualization
$ python3 -m venv venv
```

After running the above commands, you’ll find your virtual environment inside the `data-visualization` directory. Run the following command to activate the virtual environment and start using it:

```
$ source ./venv/bin/activate
```

When you activate a virtual environment, any package that you install will be installed inside the environment without affecting your  system-wide installation.
