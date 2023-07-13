const solution = (babbling) => {
  const regex = /^(aya|ye|woo|ma)*$/;

  return babbling.reduce((count, babble) => {
    if (!babble.match(regex)) {
      return count;
    }

    let lastWord = "";
    let currentWord = "";
    for (let char of babble) {
      currentWord += char;

      if (
        ["aya", "ye", "woo", "ma"].includes(currentWord) &&
        lastWord !== currentWord
      ) {
        lastWord = currentWord;
        currentWord = "";
      }
    }

    return currentWord === "" ? count + 1 : count;
  }, 0);
};
