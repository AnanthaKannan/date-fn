# date-fn
Date fn used to give the date and time format using a particular code.
Please select the corresponding code that which you need the format.


### Date Example
 ```javascript
const dateFn = require('date-fn')
const date = new Date()

dateFn.date(date, 143)
//   1991/08/28 1:10:10 PM 

dateFn.date(date, 143, '-')
//    08-28-1991 13:10

dateFn.date(date, 108)
//      Wed Aug 28 1991

dateFn.date(date, 110)
//     Aug 28, 1991

dateFn.date(date, 5)
//     1:10:10 PM

dateFn.date(date, 6)
//     13:10:10


 ```

 ### Code for Date Time

| Code 	| Response   	            |
|------	|-------------------	    |
| 143   | 1991/08/28 1:10:10 PM 	|
| 144  	| 1991/08/28 13:10:10       |
| 145  	| 1991/08/28 1:10 PM   	    |
| 146  	| 1991/08/28 13:10     	    |
| 147   | 1991/28/08 1:10:10 PM 	|
| 148  	| 1991/28/08 13:10:10       |
| 149  	| 1991/28/08 1:10 PM   	    |
| 150  	| 1991/28/08 13:10     	    |
| 151   | 08/28/91 1:10:10 PM 	    |
| 152  	| 08/28/91 13:10:10   	    |
| 153  	| 08/28/91 1:10 PM    	    |
| 154  	| 08/28/91 13:10      	    |
| 155   | 08/28/1991 1:10:10 PM 	|
| 156  	| 08/28/1991 13:10:10   	|
| 157  	| 08/28/1991 1:10 PM    	|
| 158  	| 08/28/1991 13:10      	|
| 159   | 08/1991/28 1:10:10 PM 	|
| 160  	| 08/1991/28 13:10:10   	|
| 161  	| 08/1991/28 1:10 PM    	|
| 162  	| 08/1991/28 13:10      	|
| 163   | 28/08/1991 1:10:10 PM     |
| 164  	| 28/08/1991 13:10:10   	|
| 165  	| 28/08/1991 1:10 PM   	    |
| 166  	| 28/08/1991 13:10     	    |
| 167   | 28/1991/08 1:10:10 PM	    |
| 168  	| 28/1991/08 13:10:10  	    |
| 169  	| 28/1991/08 1:10 PM   	    |
| 170  	| 28/1991/08 13:10     	    |
| 171   | 28 Aug 1991 1:10:10 PM    |
| 172  	| 28 Aug 1991 13:10:10      |
| 173  	| 28 Aug 1991 1:10 PM  	    |
| 174  	| 28 Aug 1991 13:10    	    |
| 175   | Wed Aug 28 1991 1:10:10 PM|
| 176  	| Wed Aug 28 1991 13:10:10  |
| 177  	| Wed Aug 28 1991 1:10 PM   |
| 178  	| Wed Aug 28 1991 13:10     |


### Code for Date
| Code 	| Response        	|
|------	|-----------------	|
| 101  	| 08/28/91        	|
| 102  	| 08/28/1991      	|
| 103  	| 08/1991/28      	|
| 104  	| 28/08/1991      	|
| 105  	| 28/1991/08      	|
| 106   | 1991/08/28        |
| 107   | 1991/28/08        |
| 108   | Wed Aug 28 1991 	|
| 109  	| 28 Aug 1991     	|
| 110  	| Aug 28, 1991    	|
| 111  	| 19910828        	|


### Code for Time

| Code 	| Response   	|
|------	|------------	|
| 5     | 1:10:10 PM 	|
| 6  	| 13:10:10   	|
| 7  	| 1:10 PM    	|
| 8  	| 13:10      	|

