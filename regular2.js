const fs = require('fs');

const optionHtml = fs.readFileSync(`${__dirname}/reg2.html`, 'utf-8');
const html = optionHtml.toString();

const text_1 = `
クープバゲットのパンは美味しかった。
今日はクープ バゲットさんに行きました。
クープ　バゲットのパンは最高。
ジャムおじさんのパン、ジャムが入ってた。
また行きたいです。クープ・バゲット。
クープ・バケットのパン、売り切れだった（><）
`;

const result_1 = text_1.match(/クープ.?バ[ゲケ]ット/g);

const result_2 = html.replace(
  /<option value="(\w+)"(?: selected)?>(.*)<\/option>/g,
  '$1,$2'
);
console.log(result_2);
