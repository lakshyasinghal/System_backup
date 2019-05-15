#!/bin/sh


numbers="1 2 3 4 5 6 7 8 9 10"


evenOdd (){
	for num in $numbers
	do
		Q=`expr $num % 2`
		if [ $Q -eq 0 ]
		then
			echo "$num is an even number"
			continue
		else
			echo "$num is an odd number"
		fi
	done

	return 150
}


evenOdd
ret=$?
echo "$ret"