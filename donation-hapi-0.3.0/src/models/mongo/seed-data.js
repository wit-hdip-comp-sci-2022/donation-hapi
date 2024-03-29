export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret",
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret",
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret",
    },
  },
  candidates: {
    _model: "Candidate",
    lisa: {
      firstName: "Lisa",
      lastName: "Simpson",
      office: "President",
    },
    donald: {
      firstName: "Donald",
      lastName: "Simpson",
      office: "President",
    },
  },
  donations: {
    _model: "Donation",
    one: {
      amount: 40,
      method: "paypal",
      donor: "->users.bart",
      candidate: "->candidates.lisa",
    },
    two: {
      amount: 90,
      method: "direct",
      donor: "->users.marge",
      candidate: "->candidates.lisa",
    },
    three: {
      amount: 430,
      method: "paypal",
      donor: "->users.homer",
      candidate: "->candidates.donald",
    },
  },
};
