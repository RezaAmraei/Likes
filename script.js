var likes = [9, 12, 9];
function likesFunction(index, likesName) {
  //   name = likesName;
  var countE = document.querySelector(`.${likesName} p`);
  likes[index]++;
  countE.innerText = likes[index] + " like(s)";
}
