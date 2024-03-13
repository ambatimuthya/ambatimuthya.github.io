const skills = [
  {
    title: 'C++',
    competency: 4,
    category: ['Computer Architecture', 'Languages', 'Embedded Systems'],
  },
  {
    title: 'Verilog',
    competency: 4,
    category: ['ASIC Design', 'Languages'],
  },
  {
    title: 'SystemVerilog',
    competency: 4,
    category: ['ASIC Design', 'Languages', 'ASIC Verification'],
  },
  {
    title: 'C',
    competency: 4,
    category: ['Embedded Systems', 'Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Scripting', 'Languages'],
  },
  {
    title: 'Modelsim',
    competency: 3,
    category: ['Tools & Technologies', 'ASIC Design'],
  },
  {
    title: 'Questa',
    competency: 3,
    category: ['Tools & Technologies', 'ASIC Verification'],
  },
  {
    title: 'Synopsys Design Compiler',
    competency: 3,
    category: ['Tools & Technologies', 'ASIC Design'],
  },
  {
    title: 'Keil',
    competency: 3,
    category: ['Tools & Technologies', 'Embedded Systems'],
  },
  {
    title: 'Cadence Virtuoso',
    competency: 3,
    category: ['Tools & Technologies', 'Embedded Systems'],
  },
  {
    title: 'Protocols',
    competency: 3,
    category: ['Embedded Systems'],
  },
  {
    title: 'UVM',
    competency: 3,
    category: ['Tools & Technologies', 'ASIC Verification'],
  },
  {
    title: 'Linux',
    competency: 3,
    category: ['Tools & Technologies'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
