/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'AMD-Xilinx Inc.',
    position: 'AI Engine Development Intern',
    url: 'https://www.xilinx.com/products/technology/ai-engine.html',
    startDate: '2022-09-11',
    endDate: '2022-12-15',
    summary: `The AI Engine introduced by AMD as part of the Versal™ Adaptive Compute Acceleration Platform (ACAP) represents a 
    cutting-edge processing technology designed to meet the escalating demands for compute acceleration while maintaining energy 
    efficiency in dynamic sectors like 5G, data centers, automotive, and industrial applications.`,
    highlights: [
      `Demonstrated an optimized Stamp and Repeat wrapper module to automate placement and route of kernels on the Versal FPGA AI 
      Engine array for multi layered ML architectures, resulting in reduction of compilation time by 10%(approx).\n`,
      `Developed software leveraging OOP concepts, to manage location constraints while routing tiles on a 50x8 AI Engine chip layout. 
      This led to significant improvement in code organization and scalability for high computing applications.`,
    ],
  },
  {
    name: 'NC State University',
    position: 'Graduate Research Assistant',
    url: 'https://sacagroup.github.io/',
    startDate: '2020-01-09',
    endDate: '2022-04-30',
    summary: `This research group works on cutting-edge problems in computer architecture and high-performance computing systems, 
    with a focus on secure architectures and memory systems.`,
    highlights: [
      `Implemented python scripts for including port specifications and statistics like IPC, number of memory transactions, 
      to be recorded while simulating the target RTL model to generate its corresponding SST component for simulation runs.`,
      `Contributed to the development of the Structural Simulation Toolkit (SST) simulator by actively working on the 
      integration of multiple instances of RTL/C models to facilitate co-simulation of performance models and RTL.`,
    ],
  },
  {
    name: 'Gilbarco Veeder-Root',
    position: 'Embedded Engineer',
    url: 'https://www.gilbarco.com/us/',
    startDate: '2021-08-04',
    endDate: '2022-07-30',
    summary: `Gilbarco Veeder-Root is a leading global provider of fuel dispensing equipment, payment systems, and technology solutions
     for retail and commercial fueling operations. The company specializes in developing innovative products to enhance efficiency, security, 
     and customer experience at fuel stations.`,
    highlights: [
      `Developed and debugged firmware for fuel dispensers on 32-bit STM32 Arm Cortex-M controllers, focusing on device drivers such as 
      GPIO, RS485 and customized USART and I2C libraries to minimize EMI/EMC noise in the field.`,
      `Designed an RS485 communication circuit with isolated ports using optocouplers for AdBlue fuel dispensers using Altium designer tool. 
      Post fabrication, validated the circuit’s performance and protocol compliance by transmitting data from the processor and observing 
      reception on the PCB board via DSO oscilloscope.`,
    ],
  },
];

export default work;
