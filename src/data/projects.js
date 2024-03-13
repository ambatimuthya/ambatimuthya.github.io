// TODO Add a couple lines about each project
const data = [
  {
    title: 'Functional Verification of I2C Multiple Bus Controller',
    subtitle: 'ASIC Verification using SystemVerilog',
    image: '/images/projects/Verif.png',
    link: 'https://github.com/ambatimuthya',
    date: '2023-04-06',
    desc: `Built a class-based layered test bench to verify the functionality of the I2C BFM including monitor, scoreboard etc.
    Defined testplan, coverage groups, assertions, tests and obtained an overall coverage of 94% (including code coverage).`,
  },
  {
    title: 'RTL Design for Deep Neural Network',
    subtitle: 'ASIC and FPGA Design Course Project',
    link: 'https://github.com/ambatimuthya',
    image: '/images/projects/Design.png',
    date: '2022-12-06',
    desc:
      `Implemented a synthesizable multi-stage neural network hardware design, interfaced with SRAM for data transfer.
      Achieved an area-delay product of 270E6 in 1042 clock cycles at an 11ns clock period through detailed timing analysis.`,
  },
  {
    title: 'Out-of-Order Superscalar Process Simulator',
    subtitle: 'Simulator to mimic OOO Processing',
    link: 'https://github.com/ambatimuthya',
    image: '/images/projects/OOO.png',
    date: '2022-10-09',
    desc:
      `Devised a simulator for a 9-stage superscalar processor including register renaming, that fetches N-instructions per cycle,
      evaluated the instruction per cycle (IPC) trend by varying the issue queue, the re-order buffer size for different traces.`,
  },
  {
    title: 'Cache Hierarchy Simulator',
    subtitle: 'Built a simulator to understand Cache Model function',
    image: '/images/projects/Cache.png',
    date: '2023-04-13',
    link: 'https://github.com/ambatimuthya',
    desc:
      `Designed a cache hierarchy simulator based on WBWA write policy and LRU replacement policy, achieved the lowest
      average access time of 0.71ns leading to an increase in total area by 157% while implementing both L1, L2 cache levels.`,
  },
  {
    title: 'LLVM-Compiler IR Generator',
    subtitle: 'Built an IR generator to understand Front-end Working of a simulator',
    image: '/images/projects/CompilerFD.png',
    date: '2024-02-13',
    link: 'https://github.com/ambatimuthya',
    desc:
      `Developed an LLVM compiler-based IR generator for a subset of C/C++ programming language, integrating control flow
      graph techniques, flex scanner, and bison parser to manage diverse test cases.`,
  },
];

export default data;
