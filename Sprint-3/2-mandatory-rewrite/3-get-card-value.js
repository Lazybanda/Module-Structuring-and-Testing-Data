function getCardValue(card) {
  const rank = card[0];
  if (rank === "A") return 11;
  if (
    rank === "K" ||
    rank === "J" ||
    rank === "Q" ||
    Number(card.slice(0, 2)) === 10
  )
    return 10;
  if (Number(rank) <= 9 && Number(rank) > 0 && card.length === 2)
    return Number(rank);
  else return "Invalid card rank.";
}

module.exports = getCardValue;
