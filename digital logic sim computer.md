up:: [[Logique séquentielle]]
#informatique #maths/logique 



# ALU binary operators

| bin | operator   |
| ---:|:---------- |
| 000 | COMParison |
| 001 | zero       |
| 010 | OR         |
| 011 | AND        |
| 100 | ADD (+)    |
| 101 | SUB (-)    |
| 110 | COPY A     |
| 111 | COPY B     |

# How to operate

## op exec

`op exec` is the component that gathers the ALU and the data registers. It can :

- perform operations with the ALU
- read data : register to ALU inputs
- write data : ALU output to registers
- take input : 8 bit bus to ALU inputs
- give output : ALU output or registers to 8 bit bus


> [!info] Writing data to a register
> It is not possible to write data directly from the 8 bit bus to the registers.
> If you want to register some data, you have to do the following :
>  - write the data to the ALU inputs (input A for example)
>  - set the ALU operation to copy (copy A in our example, that is `110`)
>  - write from the alu to the register (give the register address in the 8 bit bus, and set the `from ALU` and `to register` bits)



# Binary code
The binary code of the CPU. They are stored in 2 octets.

|            binary code | action          |
| ----------------------:| --------------- |
| `0000 0000  0000 0000` | NOOP            |
|     SET ALU OPERATIONS |                 |
| `XXX0 0000  0000 0001` | set X as ALU op |
| `0000 0000  0000 0001` | COMParison      |
| `0001 0000  0000 0001` | ZERO            |
| `0010 0000  0000 0001` | OR              |
| `0011 0000  0000 0001` | AND             |
| `0100 0000  0000 0001` | A+B             |
| `0101 0000  0000 0001` | A-B             |
| `0110 0000  0000 0001` | BYPASS A        |
| `0111 0000  0000 0001` | BYPASS B        |
|           READ / WRITE |                 |
| `XXXX XXXX  0000 0010` | X --> ALU A     |
| `XXXX XXXX  0000 0011` | X --> ALU B     |
| `XXXX XXXX  0000 0110` | reg X --> ALU A |
| `XXXX XXXX  0000 0111` | reg X --> ALU B |
| `0000 0000  0000 1000` | ALU --> reg     |

![[digital logic sim computer 2023-07-18 09.57.52.excalidraw]]

| bin | operator   |
| ---:|:---------- |
| 000 | COMParison |
| 001 | zero       |
| 010 | OR         |
| 011 | AND        |
| 100 | ADD (+)    |
| 101 | SUB (-)    |
| 110 | COPY A     |
| 111 | COPY B     |


10 + 10

write 10 to A -> 0001010 00000100
write 11 to B -> 0001011 00001000
write 100 to op 00000100 00010000
