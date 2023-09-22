# Hexa Sudoku Solver
<p align="center">

<img src="https://raw.githubusercontent.com/echojoel/hexa-sudoku/main/public/img/hexa-sodoku.png" width="350"/>
</p>

## Description
An hexadecimal sudoku solver. 
It should be able to solve very hard 16 x 16 Hexa Sudoku puzzles. 
Enjoy!

## Prerequisites

- [Node.js](https://nodejs.org/en/) (tested with version 14)
- [Yarn](https://yarnpkg.com/)
- [Python3](https://www.python.org) on $PATH

## Instructions

Follow these steps to get the Sudoku Solver running on your local machine.


```shell
git clone
yarn
yarn start
```

Head to http://localhost:8080

### Input format
Input the sudoku in the URL. 
Use 'x' character to represent blanks.

For example, the image presented in this README would be:
```
EBxF3xxxx6xxxx4xxC8xxxx5x0xxx6xxx5xxxxxD4ExxxA90xxxx1x4xFxACxxxxx14Bx02C5xEx38AxxAxxxxxB0xx47xxxxx5ExxF1D36B9xxxxxxxx3xxxxxxxE5xxxxxxxxEAxx78x1xxFxD8xx0xxx2xxExBxx7x2xxE9xxxxFxCx6xx9xxxx5xxxxxxxxxEBDx8xF0xxx1xxxxxxxxCxx6xxxDxxx42xxAxxDxE7x5x8xxxxx32x7xxxx6
```

The URL would be: 

http://localhost:8080/solve/EBxF3xxxx6xxxx4xxC8xxxx5x0xxx6xxx5xxxxxD4ExxxA90xxxx1x4xFxACxxxxx14Bx02C5xEx38AxxAxxxxxB0xx47xxxxx5ExxF1D36B9xxxxxxxx3xxxxxxxE5xxxxxxxxEAxx78x1xxFxD8xx0xxx2xxExBxx7x2xxE9xxxxFxCx6xx9xxxx5xxxxxxxxxEBDx8xF0xxx1xxxxxxxxCxx6xxxDxxx42xxAxxDxE7x5x8xxxxx32x7xxxx6
