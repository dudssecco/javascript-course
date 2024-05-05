const fs = require('fs').promises;

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8' });
};

//Flag a -> Adiciona no arquivo
//Flag w -> Apaga e Reescreve o arquivo
