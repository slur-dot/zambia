export interface Question {
  id: number
  problem: string
  proposedSolution: string
  ifNotResolved: string
}

export const questions: Question[] = [
  {
    id: 1,
    problem: "Zambia's population has grown, but constituencies have not been redrawn to reflect these changes, leading to unequal resource distribution.",
    proposedSolution: "Delimitation ensures equitable distribution and more CDF funding by increasing the number of constituencies.",
    ifNotResolved: "If unaddressed, rural areas will continue to suffer from underfunding and unequal service delivery.",
  },
  {
    id: 2,
    problem: "Current rules create election delays when candidates withdraw, violating Article 56.",
    proposedSolution: "Allowing elections to proceed without fresh nominations expedites the process.",
    ifNotResolved: "Failure to revise will result in continued delays and electoral inefficiencies.",
  },
  {
    id: 3,
    problem: "Underrepresentation of these groups due to lack of guaranteed seats and detailed mechanisms.",
    proposedSolution: "Guarantee seats and introduce legal quotas.",
    ifNotResolved: "Without change, Parliament remains unrepresentative and equity suffers.",
  },
  {
    id: 4,
    problem: "MPs lack formal influence in local service delivery structures.",
    proposedSolution: "Include MPs in Councils to strengthen alignment and representation.",
    ifNotResolved: "Ongoing disconnect between national policies and local needs.",
  },
  {
    id: 5,
    problem: "Petitions are not determined within required timeframes.",
    proposedSolution: "Ensure petitions are both heard and concluded within a defined period.",
    ifNotResolved: "Delays undermine trust in democratic processes.",
  },
  {
    id: 6,
    problem: "By-elections impose significant financial burdens on the Treasury.",
    proposedSolution: "Regulate expenditure to protect development budgets.",
    ifNotResolved: "Vital services like education and healthcare may be underfunded.",
  },
  {
    id: 7,
    problem: "Current number does not align with the ECZ Report on Delimitation.",
    proposedSolution: "Adjust number of nominated MPs based on new constituency boundaries.",
    ifNotResolved: "Misalignment could distort representation.",
  },
  {
    id: 8,
    problem: "90-day dissolution of Parliament contradicts the 5-year term under Article 81(1).",
    proposedSolution: "Clarify and align term to ensure full 5-year service.",
    ifNotResolved: "Ambiguity could disrupt legislative planning and governance.",
  },
  {
    id: 9,
    problem: "Ministers have unfair access to state resources during campaigns.",
    proposedSolution: "Require ministers to vacate office before elections.",
    ifNotResolved: "Maintaining status quo compromises electoral fairness.",
  },
  {
    id: 10,
    problem: "Only Mayors face term limits, causing inconsistencies.",
    proposedSolution: "Abolish term limit to align with MPs and Councillors.",
    ifNotResolved: "Retaining term limits may hinder continuity.",
  },
  {
    id: 11,
    problem: "10-year experience requirement excludes many capable candidates.",
    proposedSolution: "Broaden criteria to expand talent pool.",
    ifNotResolved: "Strict criteria limits diversity and capability in leadership.",
  },
  {
    id: 12,
    problem: "Vacancy after new President's inauguration creates governance gaps.",
    proposedSolution: "Ensure continuity regardless of presidential transitions.",
    ifNotResolved: "Legal and operational gaps weaken executive function.",
  },
  {
    id: 13,
    problem: "Current definitions lack clarity in legal contexts.",
    proposedSolution: "Align definitions with the Convention on the Rights of the Child.",
    ifNotResolved: "Ambiguity leads to misinterpretation and rights violations.",
  },
] 