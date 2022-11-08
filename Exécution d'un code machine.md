up:: [[architecture des ordinateurs]]
#informatique 

---

# Fetch Execute cycle

## Fetch
 1. The [[program counter|PC]] is copied to the Register A (appears on the address bus)
 2. simultaneously :
     - The [[program counter|PC]] is incremented by 1
     - The instruction located at the given address (in the MAR) is stored into the MBR (via the data bus)
 3. contents of the MBR (the instruction to execute) is copied to the CIR (so the MBR is free for execution)
## Decode
 4. The instruction in the CIR is decoded by the Control Unit (separated into opcode and operand.s)
## Execute
 5. The instruction is executed

# Instructions (Execute part)

## Load value to register (LDR)
> Example : `LDR R0, 10`

The Memory location specified by the operand (`10`) is copied into the MAR (appears on the address bus)
The value at the specified address (value at `10`) is loaded into the MBR, via the data bus.
The value held in the MBR is copied into the specified register (`R0`)


