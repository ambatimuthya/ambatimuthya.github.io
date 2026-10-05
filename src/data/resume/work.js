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
    name: 'Microchip Technology Inc',
    position: 'Senior Validation Engineer - I',
    url: 'https://www.microchip.com/',
    startDate: '2024-06-01',
    summary: `Microchip Technology develops microcontroller, mixed-signal, analog and FPGA solutions for embedded
    control applications. On the FPGA validation team, my main focus is silicon bring-up and validation of
    high-speed Ethernet and MACsec, working closely with cross-functional teams.`,
    highlights: [
      `Developed RTL for high-performance soft-IPs, including a Fabric AXI4 master and a custom one-logic-level embedded logic analyzer;
      supported verification and validation in the lab, performed STA, and achieved a highly pipelined design meeting the 500MHz
      target frequency on PolarFire2X FPGA.`,
      `Validated Ethernet links at 25G, 50G and 100G on the MAC/PCS datapath, by developing tests for link establishment through lane mapping,
      swizzle logic, AN/LT; and verified error handling and recovery by implementing RS-FEC error handling tests and soak tests for cable
      pull-and-restore, with the help of an Ethernet Traffic generator/analyzer.`,
      `Brought up MACsec network-encryption validation use cases for AES bulk encryption. Defined ECC error-injection tests on the encrypt and
      decrypt SA RAMs to verify error handling in the security datapath for ethernet traffic.`,
      `Automated Ethernet soak testing on Viavi test equipment by scripting traffic configurations, developed an Ethernet Validation Assistant
      chatbot and built an AI-assisted Python tooling to streamline Jira-to-Excel project tracking, boosting team efficiency and data
      management by using AI tools.`,
    ],
  },
  {
    name: 'Advance Micro Devices (AMD-Xilinx)',
    position: 'Product Development Intern',
    url: 'https://www.xilinx.com/products/technology/ai-engine.html',
    startDate: '2023-09-01',
    endDate: '2023-12-31',
    summary: `The AI Engine introduced by AMD as part of the Versal™ Adaptive Compute Acceleration Platform (ACAP) represents a
    cutting-edge processing technology designed to meet the escalating demands for compute acceleration while maintaining energy
    efficiency in dynamic sectors like 5G, data centers, automotive, and industrial applications.`,
    highlights: [
      `Developed an optimised Stamp and Repeat wrapper module, using OOP concepts to manage location constraints, to automate placement and
      routing of kernels on the 50x8 Versal FPGA AI Engine array for multi-layered ML architectures, reducing compilation time by 10%
      (approx) and improving scalability for high-compute applications.`,
    ],
  },
  {
    name: 'Secure and Advanced Computer Architecture Lab (NC State University)',
    position: 'Graduate Research Assistant',
    url: 'https://sacagroup.github.io/',
    startDate: '2023-01-01',
    endDate: '2023-04-30',
    summary: `This research group works on cutting-edge problems in computer architecture and high-performance computing systems,
    with a focus on secure architectures and memory systems.`,
    highlights: [
      `Contributed to the Structural Simulation Toolkit (SST), an HPC simulator, by developing Python scripts to auto-generate RTL-based SST
      components and integrating multiple RTL/C model instances for co-simulation, then analysed performance metrics including IPC and memory
      transactions across varying memory configurations.`,
    ],
  },
  {
    name: 'Gilbarco Veeder-Root',
    position: 'Embedded Engineer',
    url: 'https://www.gilbarco.com/us/',
    startDate: '2020-08-01',
    endDate: '2022-07-31',
    summary: `Gilbarco Veeder-Root is a leading global provider of fuel dispensing equipment, payment systems, and technology solutions
     for retail and commercial fueling operations. The company specializes in developing innovative products to enhance efficiency, security,
     and customer experience at fuel stations.`,
    highlights: [
      `Developed and debugged STM32 (32-bit Arm Cortex-M) firmware including custom GPIO, RS485, USART, and I2C drivers optimised to minimise
      field EMI/EMC noise and designed an isolated, optocoupler-based RS485 circuit in Altium Designer, validating protocol compliance and
      signal integrity post-fabrication via DSO oscilloscope.`,
    ],
  },
];

export default work;
