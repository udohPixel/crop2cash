// app helper function
const helpers = {

  // search function
  containsString: async (a, b) => {
    for (let i = 0; i < a.length; i + 1) {
      if (b.indexOf(a[i]) !== -1) {
        return true;
      }
    }
    return false;
  },
};

// export
module.exports = helpers;
