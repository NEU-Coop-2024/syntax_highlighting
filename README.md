# echo_append README

## Introduction

echo_append is a Python project aimed at creating custom IPython cell magics for Jupyter Notebooks. The primary functionality is to accumulate and display the results of all executed cells, along with a 'Success!' message at the end.

## Dependencies

Python 3.11.9
Poetry 1.8.3
Jupyter notebook 7.2.1
IPython 8.26.0

Esure that you have poetry and jupyter installed

Jupyter installation: https://jupyter.org/install
Poetry installation: https://python-poetry.org/docs/

## Setting up Environment

Begin by cloning the repository from Github and then navigate to the top directory of the project

`cd ~/{location}/{of}/{project}/helical-jupyter`

While inside the `helical-jupyter` folder, create a virtual environment to install the project and its dependencies:

- Windows: `py -m venv {name of your virtual environment}`
- OSX: `python3 -m venv {name of your virtual environment}`

Activate your virtual environment:

Windows: `.\{name of virtual environment}\Sciprts\activate`
OSX:`./{name of virtual environment}/bin/activate`

Install the project (make the package accessible from any location when the virtual environment is activated):

`poetry install`

Launch jupyter notebook and create a new notebook to get started:

`jupyter notebook`

## Using the cell magic in Juptyer notebook

Before using echo_append in your Jupyter Notebook, you need to load it as an extension:

`%load_ext echo_package`

To call the custom magic:

`%%echo_append`
followed by any number of print statements, i.e

```
%%echo_append
print('1')
print('12')
```

which should produce an output of:

```
1
12
Success!
```

If you were to create another cell after the previos one with a call to `%%echo_append` i.e.

```
%%echo_append
print('123')
print('1234')
```

the state would be preserved such that the previous cells' outputs would be appended together

```
1
12
123
1234
Success!
```

## Tooling recommendations

Visual Studio Code - IDE for python devlopement
Poetry - dependency management

## Changes to the echo_append script

Modifications to the echo_append script can be made in the `echo_append.py` file in the echo_append directory
