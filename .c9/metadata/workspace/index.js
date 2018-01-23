{"changed":true,"filter":false,"title":"index.js","tooltip":"/index.js","value":"const express = require('express'); //get access to express library\nrequire('./services/passport'); //passport config\n\n//authRoutes is a function since in authRoutes.js it uses module.exports and exports an arrow function\n    // const authRoutes = require('./routes/authRoutes');  \n    // const app = express();\n    // authRoutes(app);\n// the above can be refact to the below\nconst app = express();\nrequire('./routes/authRoutes')(app);\n\n\nconst PORT = process.env.PORT || 5000; //specific for Cloud9\n//when works on Cloud9, your port is process.env.PORT\napp.listen(PORT, function() {\n    console.log(\"APP is running on port \" + process.env.PORT);\n});","undoManager":{"mark":93,"position":100,"stack":[[{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["e"],"id":1155}],[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":[" "],"id":1156}],[{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["c"],"id":1157}],[{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["a"],"id":1158}],[{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":["n"],"id":1159}],[{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":[" "],"id":1160}],[{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"insert","lines":["b"],"id":1161}],[{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"insert","lines":["e"],"id":1162}],[{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"insert","lines":[" "],"id":1163}],[{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"insert","lines":["r"],"id":1164}],[{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"insert","lines":["e"],"id":1165}],[{"start":{"row":7,"column":22},"end":{"row":7,"column":23},"action":"insert","lines":["f"],"id":1166}],[{"start":{"row":7,"column":23},"end":{"row":7,"column":24},"action":"insert","lines":["a"],"id":1167}],[{"start":{"row":7,"column":24},"end":{"row":7,"column":25},"action":"insert","lines":["c"],"id":1168}],[{"start":{"row":7,"column":25},"end":{"row":7,"column":26},"action":"insert","lines":["t"],"id":1169}],[{"start":{"row":7,"column":26},"end":{"row":7,"column":27},"action":"insert","lines":[" "],"id":1170}],[{"start":{"row":7,"column":27},"end":{"row":7,"column":28},"action":"insert","lines":["t"],"id":1171}],[{"start":{"row":7,"column":28},"end":{"row":7,"column":29},"action":"insert","lines":["o"],"id":1172}],[{"start":{"row":7,"column":29},"end":{"row":7,"column":30},"action":"insert","lines":[" "],"id":1173}],[{"start":{"row":7,"column":30},"end":{"row":7,"column":31},"action":"insert","lines":["t"],"id":1174}],[{"start":{"row":7,"column":31},"end":{"row":7,"column":32},"action":"insert","lines":["h"],"id":1175}],[{"start":{"row":7,"column":32},"end":{"row":7,"column":33},"action":"insert","lines":["e"],"id":1176}],[{"start":{"row":7,"column":33},"end":{"row":7,"column":34},"action":"insert","lines":[" "],"id":1177}],[{"start":{"row":7,"column":34},"end":{"row":7,"column":35},"action":"insert","lines":["b"],"id":1178}],[{"start":{"row":7,"column":35},"end":{"row":7,"column":36},"action":"insert","lines":["l"],"id":1179}],[{"start":{"row":7,"column":36},"end":{"row":7,"column":37},"action":"insert","lines":["e"],"id":1180}],[{"start":{"row":7,"column":37},"end":{"row":7,"column":38},"action":"insert","lines":["w"],"id":1181}],[{"start":{"row":7,"column":37},"end":{"row":7,"column":38},"action":"remove","lines":["w"],"id":1182}],[{"start":{"row":7,"column":36},"end":{"row":7,"column":37},"action":"remove","lines":["e"],"id":1183}],[{"start":{"row":7,"column":35},"end":{"row":7,"column":36},"action":"remove","lines":["l"],"id":1184}],[{"start":{"row":7,"column":35},"end":{"row":7,"column":36},"action":"insert","lines":["e"],"id":1185}],[{"start":{"row":7,"column":36},"end":{"row":7,"column":37},"action":"insert","lines":["l"],"id":1186}],[{"start":{"row":7,"column":37},"end":{"row":7,"column":38},"action":"insert","lines":["o"],"id":1187}],[{"start":{"row":7,"column":38},"end":{"row":7,"column":39},"action":"insert","lines":["w"],"id":1188}],[{"start":{"row":7,"column":39},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":1189}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":["r"],"id":1190}],[{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"insert","lines":["e"],"id":1191}],[{"start":{"row":8,"column":2},"end":{"row":8,"column":3},"action":"insert","lines":["q"],"id":1192}],[{"start":{"row":8,"column":3},"end":{"row":8,"column":4},"action":"insert","lines":["u"],"id":1193}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"remove","lines":["requ"],"id":1194},{"start":{"row":8,"column":0},"end":{"row":8,"column":11},"action":"insert","lines":["require(\"\")"]}],[{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"insert","lines":["("],"id":1195}],[{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"remove","lines":["("],"id":1196}],[{"start":{"row":8,"column":8},"end":{"row":8,"column":10},"action":"remove","lines":["\"\""],"id":1197}],[{"start":{"row":8,"column":8},"end":{"row":8,"column":10},"action":"insert","lines":["''"],"id":1198}],[{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"insert","lines":["."],"id":1199}],[{"start":{"row":8,"column":10},"end":{"row":8,"column":11},"action":"insert","lines":["/"],"id":1200}],[{"start":{"row":8,"column":11},"end":{"row":8,"column":12},"action":"insert","lines":["r"],"id":1201}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":["o"],"id":1202}],[{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["u"],"id":1203}],[{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["t"],"id":1204}],[{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["e"],"id":1205}],[{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["s"],"id":1206}],[{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":["."],"id":1207}],[{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"remove","lines":["."],"id":1208}],[{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":["/"],"id":1209}],[{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":["a"],"id":1210}],[{"start":{"row":8,"column":19},"end":{"row":8,"column":20},"action":"insert","lines":["u"],"id":1211}],[{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"insert","lines":["t"],"id":1212}],[{"start":{"row":8,"column":21},"end":{"row":8,"column":22},"action":"insert","lines":["h"],"id":1213}],[{"start":{"row":8,"column":22},"end":{"row":8,"column":23},"action":"insert","lines":["R"],"id":1214}],[{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"insert","lines":["o"],"id":1215}],[{"start":{"row":8,"column":24},"end":{"row":8,"column":25},"action":"insert","lines":["u"],"id":1216}],[{"start":{"row":8,"column":25},"end":{"row":8,"column":26},"action":"insert","lines":["t"],"id":1217}],[{"start":{"row":8,"column":26},"end":{"row":8,"column":27},"action":"insert","lines":["e"],"id":1218}],[{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"insert","lines":["s"],"id":1219}],[{"start":{"row":8,"column":30},"end":{"row":8,"column":32},"action":"insert","lines":["()"],"id":1220}],[{"start":{"row":8,"column":31},"end":{"row":8,"column":32},"action":"insert","lines":["a"],"id":1221}],[{"start":{"row":8,"column":32},"end":{"row":8,"column":33},"action":"insert","lines":["p"],"id":1222}],[{"start":{"row":8,"column":33},"end":{"row":8,"column":34},"action":"insert","lines":["p"],"id":1223}],[{"start":{"row":7,"column":39},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":1224}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":["c"],"id":1225}],[{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"insert","lines":["o"],"id":1226}],[{"start":{"row":8,"column":2},"end":{"row":8,"column":3},"action":"insert","lines":["n"],"id":1227}],[{"start":{"row":8,"column":3},"end":{"row":8,"column":4},"action":"insert","lines":["s"],"id":1228}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["t"],"id":1229}],[{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"insert","lines":[" "],"id":1230}],[{"start":{"row":8,"column":6},"end":{"row":8,"column":7},"action":"insert","lines":["a"],"id":1231}],[{"start":{"row":8,"column":7},"end":{"row":8,"column":8},"action":"insert","lines":["p"],"id":1232}],[{"start":{"row":8,"column":8},"end":{"row":8,"column":9},"action":"insert","lines":["p"],"id":1233}],[{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"insert","lines":[" "],"id":1234}],[{"start":{"row":8,"column":10},"end":{"row":8,"column":11},"action":"insert","lines":["="],"id":1235}],[{"start":{"row":8,"column":11},"end":{"row":8,"column":12},"action":"insert","lines":[" "],"id":1236}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":["e"],"id":1237}],[{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["x"],"id":1238}],[{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["p"],"id":1239}],[{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["r"],"id":1240}],[{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["e"],"id":1241}],[{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":["s"],"id":1242}],[{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":["s"],"id":1243}],[{"start":{"row":8,"column":19},"end":{"row":8,"column":21},"action":"insert","lines":["()"],"id":1244}],[{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"insert","lines":[";"],"id":1245}],[{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"remove","lines":[";"],"id":1246}],[{"start":{"row":8,"column":21},"end":{"row":8,"column":22},"action":"insert","lines":[";"],"id":1247}],[{"start":{"row":9,"column":35},"end":{"row":9,"column":36},"action":"insert","lines":[";"],"id":1248}],[{"start":{"row":3,"column":86},"end":{"row":3,"column":87},"action":"insert","lines":["n"],"id":1249}],[{"start":{"row":3,"column":87},"end":{"row":3,"column":88},"action":"insert","lines":[" "],"id":1250}],[{"start":{"row":3,"column":88},"end":{"row":3,"column":89},"action":"insert","lines":["a"],"id":1251}],[{"start":{"row":3,"column":89},"end":{"row":3,"column":90},"action":"insert","lines":["r"],"id":1252}],[{"start":{"row":3,"column":90},"end":{"row":3,"column":91},"action":"insert","lines":["r"],"id":1253}],[{"start":{"row":3,"column":91},"end":{"row":3,"column":92},"action":"insert","lines":["o"],"id":1254}],[{"start":{"row":3,"column":92},"end":{"row":3,"column":93},"action":"insert","lines":["w"],"id":1255}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":14,"column":29},"end":{"row":14,"column":29},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1516303982547}