#!/bin/sh

echo 'What is your name?'
read Person
echo "Hello, $Person"

echo $1
echo $2
echo
echo
echo $*
echo $@
echo $0
echo $#