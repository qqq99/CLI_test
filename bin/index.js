#!/usr/bin/env node
console.log('cli test')
const program = require('commander')

program.version(require('../package').version)
program.usage(': A Very Simple Robot')
program
.option('F,  Moving Forward','move forward 1 unit')
.option('B,  Moving Backward','move backward 1 unit')
.option('R,  Turn Right','turn right 90 degrees')
.option('L,  Turn Left','turn left 90 degrees')
program
.command('start','start playing!')

program.parse(process.arg)