const starline = function( number1){
	let row1 = '' ;
		for(let a = 1; i <= number; a++) {
		row1 = row1 + '*';
}
			return row1;
			}
									        				
  const space = function (number2) {
	let row1 = '';
	for (let a = 1; a <= nuber2; a++) {
	row1 = row1 + ' ';
	}
			return row1;
				};
																					

const dimondtop = function (height) {
    const number3 = (height + 1) / 2;
    let Stars = 1;
    let Spacerow = (height - 1) / 2;

    for (let a = 1; a <= number3; a++) {
        console.log(space(Spacerow) + starline(Stars));

        Stars = Stars + 2;
        Spacerow = Spacerow - 1;
    }
};

const dimondbottom = function (height) {
    const number3 = (height - 1) / 2;
    let Stars = height - 2;
    let Spacerow = 1;

    for (let a = 1; a <= number3; a++) {
        console.log(space(Spacerow ) + starsline(Stars));

        Stars = Stars - 2;
        Spacerow = Spacerow + 1;
    }
};

const diamond = function (height) {
    if (height % 2 === 0) {
        height = height + 1;
    }

    dimondtop(height);
    dimondbottom(height);
};

diamond(9);