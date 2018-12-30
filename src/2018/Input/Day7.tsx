export const PART_2_CONFIGS
: { [key:string]: { baseTime: number, workers: number } } = {
  DEMO: {
    baseTime: 1,
    workers: 2
  },
  REAL: {
    baseTime: 61,
    workers: 5
  }
}

const INPUT: { [key:string]: string } = {
DEMO:
`Step C must be finished before step A can begin.
Step C must be finished before step F can begin.
Step A must be finished before step B can begin.
Step A must be finished before step D can begin.
Step B must be finished before step E can begin.
Step D must be finished before step E can begin.
Step F must be finished before step E can begin.`,

REAL:
`Step E must be finished before step H can begin.
Step Y must be finished before step T can begin.
Step F must be finished before step S can begin.
Step U must be finished before step K can begin.
Step X must be finished before step Z can begin.
Step Q must be finished before step W can begin.
Step W must be finished before step O can begin.
Step G must be finished before step A can begin.
Step N must be finished before step H can begin.
Step S must be finished before step H can begin.
Step K must be finished before step C can begin.
Step J must be finished before step H can begin.
Step T must be finished before step B can begin.
Step C must be finished before step P can begin.
Step L must be finished before step V can begin.
Step Z must be finished before step A can begin.
Step M must be finished before step A can begin.
Step A must be finished before step P can begin.
Step V must be finished before step O can begin.
Step I must be finished before step O can begin.
Step P must be finished before step H can begin.
Step O must be finished before step D can begin.
Step R must be finished before step B can begin.
Step D must be finished before step B can begin.
Step B must be finished before step H can begin.
Step J must be finished before step L can begin.
Step T must be finished before step V can begin.
Step Z must be finished before step M can begin.
Step G must be finished before step B can begin.
Step K must be finished before step L can begin.
Step Z must be finished before step H can begin.
Step L must be finished before step M can begin.
Step X must be finished before step A can begin.
Step N must be finished before step M can begin.
Step G must be finished before step M can begin.
Step A must be finished before step V can begin.
Step G must be finished before step S can begin.
Step G must be finished before step J can begin.
Step L must be finished before step A can begin.
Step A must be finished before step H can begin.
Step T must be finished before step M can begin.
Step X must be finished before step N can begin.
Step P must be finished before step O can begin.
Step Y must be finished before step F can begin.
Step U must be finished before step G can begin.
Step G must be finished before step O can begin.
Step P must be finished before step D can begin.
Step G must be finished before step L can begin.
Step Z must be finished before step P can begin.
Step C must be finished before step L can begin.
Step E must be finished before step B can begin.
Step T must be finished before step Z can begin.
Step D must be finished before step H can begin.
Step U must be finished before step N can begin.
Step E must be finished before step V can begin.
Step L must be finished before step D can begin.
Step K must be finished before step Z can begin.
Step O must be finished before step R can begin.
Step V must be finished before step R can begin.
Step L must be finished before step O can begin.
Step T must be finished before step H can begin.
Step E must be finished before step Q can begin.
Step S must be finished before step T can begin.
Step U must be finished before step M can begin.
Step Q must be finished before step V can begin.
Step I must be finished before step B can begin.
Step L must be finished before step Z can begin.
Step Y must be finished before step B can begin.
Step J must be finished before step C can begin.
Step F must be finished before step Q can begin.
Step J must be finished before step D can begin.
Step Q must be finished before step L can begin.
Step I must be finished before step D can begin.
Step N must be finished before step V can begin.
Step U must be finished before step H can begin.
Step J must be finished before step R can begin.
Step K must be finished before step V can begin.
Step G must be finished before step P can begin.
Step Y must be finished before step X can begin.
Step L must be finished before step H can begin.
Step R must be finished before step D can begin.
Step S must be finished before step C can begin.
Step Q must be finished before step A can begin.
Step U must be finished before step X can begin.
Step V must be finished before step B can begin.
Step U must be finished before step Z can begin.
Step F must be finished before step P can begin.
Step G must be finished before step D can begin.
Step O must be finished before step H can begin.
Step C must be finished before step D can begin.
Step L must be finished before step P can begin.
Step N must be finished before step I can begin.
Step Q must be finished before step O can begin.
Step Q must be finished before step D can begin.
Step Z must be finished before step D can begin.
Step Y must be finished before step N can begin.
Step M must be finished before step O can begin.
Step W must be finished before step R can begin.
Step S must be finished before step D can begin.
Step O must be finished before step B can begin.
Step I must be finished before step P can begin.`
}

export default INPUT