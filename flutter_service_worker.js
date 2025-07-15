'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2600475ccc0bb39644da914d8bd392f7",
".git/config": "469e8eb5a728127de657e4b75f08fadb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bbb87b50b96dc3555a6533b36e49b55c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d409e0c06e4c949e2d40fe27668649c7",
".git/logs/refs/heads/gh-pages": "99106edc26d64cfe0cf6cbefdc9fac53",
".git/logs/refs/heads/main": "938993de850f1210890d728b21ba1b8a",
".git/logs/refs/remotes/origin/gh-pages": "4a96c5555da8b2f8687a554e60bf8aa2",
".git/logs/refs/remotes/origin/main": "38f23f5112058f2ae015c36545d33707",
".git/objects/00/032ff8cbfb27ac49387101d828db19aa4f415b": "ac933a406296ec2d09198fd98ec22a7d",
".git/objects/02/37322e66fb8f953a0a1a01373c13cd4e8e213d": "2e5cf93809f390d9a06cf9d8263d34a3",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/e9eda7dd7f177dc6e94ca31ddad5daab688857": "90574baebc8378f3b5a70ddb2b245d8d",
".git/objects/04/899705cc31ee0f1068f22882b7d50d8cc74ab5": "959166e80664a822d7fcb87b8b70e711",
".git/objects/08/ccb36226748c4de5fc6d31f0285c2a89cfb135": "1d4a98660c65cef3277f51fc7bb0d243",
".git/objects/09/6402aaf29bc25369976fe5934264dbf216f159": "2aac76878e8ee2df7e97f077216420c9",
".git/objects/0b/0e1067dd66c4eccea4a6b031912ec2d98dc31b": "699fd3968b871b2fb6105bbea8acde2b",
".git/objects/0c/629e2a92880267f8439d899ac581a0a524e612": "e24bd1bf493911ec78342372f4f9c309",
".git/objects/13/217edb48ed80b49b40632b745c23cfe79e3346": "ce6fa3a7d745af9619fff7a347a909b8",
".git/objects/14/57fc506b183b01cf2839f101e91671fa3387e8": "51778a82b786bf6247a884c2eb3afd36",
".git/objects/14/65fa873697fc7ce95e318d404184039a940045": "83393374c0928315e58e8cb8d846187b",
".git/objects/16/aa8aa6139972dbb451ad6067653e0918d8d79f": "06521d2443f5fbf2a4540e54c1f406ad",
".git/objects/17/78d4becb939244532deb25e33941045ac823cc": "70c94b81b836d93026823ac93b0ccc97",
".git/objects/1c/dcdb4aeb4726f2012ee6249cee08a17fa0237d": "c5ca784776b3dea4abfc8d409fdd0692",
".git/objects/1d/d806d1bdd4295c7794b3cb3765b8b765ad53e5": "ab18a68294912ad2bf21d7dffe5b0ca9",
".git/objects/1f/59eb805a9ee263a291edaea117b15dcc2fe899": "3478c51f0abb7541d7a7b70a3b8bba35",
".git/objects/21/a3435cc66c4e1b032c3a2642ebf693cd702376": "d87c394d9df09e880560623040a16a8b",
".git/objects/25/f62d91e0396e9fd388ab039e1a7c1f80598de2": "06c772f275fb7505b22aa4a5d4cb3219",
".git/objects/2d/75b0e93f9e5b331535ac3fc5468c2c693dfd19": "45af9379d3d86f8dd8ee4f996a7d1ed7",
".git/objects/2f/b11b29fb91a927087383eec0c5bcacdb6ec0dd": "ca181d6b76d7595505d11aef31b92387",
".git/objects/2f/be135dd079c7f49c655c6f37bba1b7ba8e7e15": "3986856d7a3d97176d738a62950e9a4e",
".git/objects/32/e22ffa6af9d8e6eba8c6d8306f03c2085149e5": "045ba5e470ec814cb32398ce984dff23",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/3f923c6a46d81268d5c92b75bdcc4eb4ee2dd8": "fbe08b66ac1dab5ea9e597e702304e8a",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/0098f981f7813c94e4ef02f378c20665346208": "b5b9dde1f15b8e6bb0aad99977db4356",
".git/objects/36/46d7380db97dd8eb9060a745206e6d9bc003fa": "866c5824b7c451111b37278671690cc8",
".git/objects/37/0cc5f487807801392725218aa26afd119a626f": "b2cb39325fc5ceb8aec7598725b15ddc",
".git/objects/38/b4940254c29151bd3cb6e15dde15335fe74343": "7cf7a34dc8798ea7aaa77942e55fdd9a",
".git/objects/38/d283493b380d5e85a9f4ce365648a6936a77cf": "5e20375ef9fe2f04fdf052cc0428c88a",
".git/objects/3a/50085f0be2fea20af76cddd951ee32fa0d9415": "d2a9537044d7131f7a6532cf93210287",
".git/objects/3a/9c633ccf019db4e89ba2b8c9332d550eff4964": "4afa02ede69b92b2dbf25baecf37dad8",
".git/objects/3e/84b0d4098a54a5a7ef5ff0a106de617d1cda34": "1bed90d7e11d03bae38dbf00f7748a26",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/49/397782e169bf2ecc3bbd531d153328e7f390a2": "ce7298b151a0e73c87f68c4f601e18df",
".git/objects/4a/26589b68e76f1e15a5ef284d704759d065caee": "b5be6c35fbb7a8e8d053deb8d853b268",
".git/objects/4e/fb4cece834aa3fd719e0317d42ede9c52dcbb8": "6e6630b383f3a271bec3a35454cc00a1",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/25891f2fcc6f64de17c96a4a355492267312bf": "0ab45c8894243bc5f190040d66f0dcfa",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/896da7bbe8d405fd28b216687e3d514d6ff68a": "b64c1131c14f30056bc739746b0bbdf2",
".git/objects/5d/0de2fe4ade24174f81a535bd19ead9aff5be5f": "155ff84a887129c0e56b502c46c79a3f",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/3577c85abf74dd15849a15a659d3f81ceaa8f6": "d18d2f873bebcc519f6226d9054404ab",
".git/objects/64/124e060d33bbe4fd2595a937f3ae7d9729c40d": "a89b0839ae31e134c4bd6f3728fd75b1",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/38bd7a83d568178bf0087a6ecd15241a4b5ae7": "42d021beca3cdf161c1b5e23381d1c07",
".git/objects/6c/a131d4f140a684ebe89d26e0bff9286a285c79": "991e000472c6d330efaafb82951596a3",
".git/objects/71/cac5680e0609ccfafd4c2253670fe09937278e": "6e2d1e58bcfd15604b3b604f5a446bbf",
".git/objects/74/04ccc141ebbe22fa7b8027ca37670985188fd5": "0508cc84c92c42f1d43441b19ca4c37c",
".git/objects/74/05b43d653f12d4170ed76abf7641a51d47bdab": "980e932874d4d8f211ef5e3664b7fde5",
".git/objects/77/38c9891566dff2e7b21e61313bec60e0acb379": "389c8eb0f9377376cdeb492fc552c8dd",
".git/objects/7a/42cf10389eb65399c0b9a3c4b3a98d76b28771": "97847a05d4c6799c54d70870fbbecf99",
".git/objects/82/0b6824d1a2673e37cd99be62bdb9d5fada8611": "e08e68f58af88586af1294f4bd7c883f",
".git/objects/83/280a4151e30af49623df6b6a404c67720b1ef8": "320d7a486d64040b2fbebc8712e1fca9",
".git/objects/83/6ae5a61f06b2244c3bece627ce28b0eb220e19": "69edd1ea0932da51b8fa90ad2bdbce5c",
".git/objects/84/c303e429622fed15da3ac3cd1524da29f59935": "4089103172a56b42346fbb325448c85c",
".git/objects/84/c32cb904e7e0cefa8d150e8d8d8df42993a30e": "abcfeb20f3150d91b97a1faac8a8ce71",
".git/objects/86/dfcefabe27400dde8763ab29391746a5ea701d": "30b1b6d104e6d3cb9f56a326f633fd9f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/9e63bb23c305677369adce90681c975f4e3180": "287cf659e0d08693e6e2c592e19fb72f",
".git/objects/8d/a5ccc8d721a3598c1ca84939a19e89324a9d9a": "0d5548f1bb015180c6ac7c3bc664509b",
".git/objects/8e/2b5681fe399b570b93b44afcaf847d4666fa03": "27ee647a2ad6b4db72bab6aa57307dea",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/93/ef09291a05558894b373b9914c9bc67d0bfa2f": "01544e5860ed59d9a66f77fa1eb99ae6",
".git/objects/96/93a4044ac0f2a7480f1ffe9722114885735ed0": "27432b89dd440fcaec2b6a87ffae6f9f",
".git/objects/9b/b55478f7efd67e6b048350c0f1633c4f7f9415": "82bff5bba07dc8dbc2df261a1ea52f80",
".git/objects/9f/9e8ec128260d94fca0aba07a4c84e6483b352e": "d6443c995a088214dbfca955ec4e85a5",
".git/objects/a1/ce83edf315e5dc34df7277fe05dcbb1f11f5c0": "63c6c1ac5bf7f8d668fdafefa0b7d8a5",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ab/596088a76458866814f038795ed276fa834565": "559a3762b9e1d72a55565014b39e7f7e",
".git/objects/af/1803699213ef8c4a6b354d561b0181d83a02ca": "870bc035b9af1bb8628fdfc1216cfb3c",
".git/objects/af/2162296c6c7555992f3c78c7660eb179aacfac": "e34ae4dfbe735a4b65f9f9b7570003a8",
".git/objects/b1/a61b11bb5b7f827cf16f9623591bf550249b58": "f77f37fc98292ba5ace1af13aba2c39c",
".git/objects/b2/b2fc9c4fba7d6e7620b6884d0ec6de2e7f2d9c": "c6469cd80cee9eefb3fa7ac839c7c201",
".git/objects/b2/f83dbb5e2b99f646887ae3e74fad79faa7de3f": "5128001f0af1c3feee7a7b005cc13fb6",
".git/objects/b3/531e873a5d86d5cc9d257c352917967ccfad17": "66e051f199aca7d65dca6905e007ae92",
".git/objects/b4/b7b919c4ebf64451ad89cad34fa15f5e799ea5": "f669244b4bb30c10f650aa783dc3789c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/7a50253980265394aefb1a1d70422f49d48f21": "6142739aab73ecf129d0b91843ac61da",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ef4267703b66cf20fdb34a232bed6fc84851c6": "0fa70aafaa0de93ff1ce4c9db7ffcbdf",
".git/objects/c1/5adbc0d5ceb57341e6d612444ea2ba4c59f077": "54c854523359248b01dbdd8142f16a69",
".git/objects/c5/3dcbc3ec9d857122cd4b10681f61c57d761f39": "261d7a826c34f8e166685a1b18604b89",
".git/objects/c5/d18c70c271a3e7ee2420d444ed36bc05081884": "e2afd3ad812911e986af22ae1cf10d94",
".git/objects/c8/1f80ffe42cd265260c465e23e604aec278b1e6": "9cd23cb3cd91591effc76721dc48aa4b",
".git/objects/c9/1ae6a6a63ae003ed6f282f9432af30ae88a89d": "afe58c23ce832c68c367b2b284f7664b",
".git/objects/ca/5736f232668d939b22bf27ba6e8d4fe3c89676": "f18a188707839bdf6e55768367696939",
".git/objects/cc/14872a5f6ac747c2a274a21af40039acf5f376": "f5f6ebb41803871e9240cfc5006a9716",
".git/objects/cc/24e85cc04f771ccd3e6a3ab1d850eaec5a322c": "900012bcd5e9c5b2dd7c073df0462d16",
".git/objects/cd/4dd566435995450e0abdc29de794f5f2036be7": "d5caa4b8eb20568e88d03c365d908ccd",
".git/objects/cd/fdab2e82674bc2225b51c68c7220f597feddcd": "bf854bbfd83ca696a2600ab45487fa51",
".git/objects/ce/d3766c430bf986b8864aa8aaeedf859f232375": "adaf846a086bf58d3853cb5c57fe5344",
".git/objects/cf/04766d59384940002878d430c052dbf2a01001": "ecb0b1be32c0875618d22f61da7f1c4a",
".git/objects/d0/c93493be98e9f55b32522e5df8cbdc3e36a9d7": "a4c196876c516cdb2b287f0fb53334ba",
".git/objects/d1/4e65974d6c8c974f2dd224021cbe22105bf58b": "cbdefecf92f105e1e5321322c679c89e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/e5a41ec50a966f506411fdec931d3f27dfb983": "db587af448ba1eafab8cd7680c826d15",
".git/objects/d6/757e4ecd0add909ab7752561b95d19a7686549": "225ad8685b769daa083956306293cc44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/fd31d86c493029da808fb2e541e1355bbcb58a": "cbef06f8190c980032cd650ecc3c3725",
".git/objects/de/7415abbbc05753d013d66a2cf0fb1d84dd6d83": "e10802b3945bd146e7699cee8d73e108",
".git/objects/e3/849383449b6f7585bb0c7607d6d78d527154ad": "0daa1fac3c65c5844fde65c237fa26ff",
".git/objects/e3/b736f7d1ae9393f1d70cb0fa1bf2c631a1b7f0": "f39f22dc24e6cba95dc158a042b39066",
".git/objects/e3/bb1d5bac91f3220c5afe06877bb333f500e938": "c9a4a964f4180e7b46d32123e7a17f73",
".git/objects/e5/e0c3f5348facce45c885ee0828f7d2c16dc315": "40600e489c6aedf1f0f38a54b4ff4086",
".git/objects/e7/d6eb0442ca30f2f91a194da69887110d0ecb09": "e37e1f4aef9a3094a40783558d0ff81e",
".git/objects/e7/e5ba5d22cb08346287f37e049bac483bafee97": "9c904d74aa796f3ef747a8e1a64868f1",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/cbab05758c526058a0855fbb4ce0cd246cccf9": "509f5023b008f7fa113bfd5d2731f234",
".git/objects/e9/ea991fb408dc6e52d4c18c0e628fdbbb86ee05": "04b4ccbbbdc912e4d85cdb2f8d5ca05e",
".git/objects/ea/18f961a65516fabfd55237e8f2a3ae72c5bcbc": "c8d78d556d1fdffda26e834f2e94e5ec",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f832393270097c23982ccd1f02fbf8d0fc07eb": "a6d49711fb539187ef7f64a05ec7267a",
".git/objects/ed/d2c4cc00ae514aac7f68d6d4261ba251298b02": "261da1f3212e17ea61e4b3df634b8bf0",
".git/objects/ee/6afdc243fe6110a4e376234a96e101f2f7fe49": "5747ecf2683decfa291b1430c184d01e",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/b44af7ca4a5d288177ea8e66847db3702aa472": "18743cc5907c445587303bf72c24a478",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/ce14408138b5ee4ff120d44df5309a5b747052": "bba19901338db0452d3ef6fd5ccb37db",
".git/objects/fe/15908b3769e1875d49ae6b7d290d34a804bf0f": "b7806545ea3096af34cce422f680765c",
".git/objects/fe/928e2786aa0a6f83cbdedb5761ce7a8953594b": "d0de871c3089169836ea93f62e4791ac",
".git/objects/ff/49e854955e3924c78f02ba377060f3989d5029": "be53ec47437ffc8574143b7e73aca1d2",
".git/refs/heads/gh-pages": "89b5787d2f1233317ba96ca70254ff2a",
".git/refs/heads/main": "51f608e85b890b091653b9a7bcf02c8d",
".git/refs/remotes/origin/gh-pages": "89b5787d2f1233317ba96ca70254ff2a",
".git/refs/remotes/origin/main": "51f608e85b890b091653b9a7bcf02c8d",
"assets/AssetManifest.bin": "37751e5e0392775bd1b78d5180166b02",
"assets/AssetManifest.bin.json": "37ac4279f9b94fcdc173a161242390d4",
"assets/AssetManifest.json": "d93064a383802f5f97c2987b36d24e7a",
"assets/assets/fonts/Cairo-Medium.ttf": "2b76c14c6934874d64ab85d92c4949e1",
"assets/assets/fonts/ClashDisplay-Medium.otf": "4c49fc387f94a3022d00245e4590cc9f",
"assets/assets/images/2.png": "fed6bb7ec55774b5e01425598401279b",
"assets/assets/images/4.png": "0399bc088c5a56e492337fff3992fea8",
"assets/assets/images/9.png": "f9cb83b36c1c11961175a69eb738cc2b",
"assets/assets/images/Arrow.png": "d6db15732e210f85dbc570bdee9986f6",
"assets/assets/images/download.png": "f1afd180a3b0bb9da48e61eb77eaa5e1",
"assets/assets/images/Gradient.png": "57ea7fd968218d4ca98d1f302d859580",
"assets/assets/images/iMockup%2520-%2520Google%2520Pixel%25208%2520Pro%2520(1).png": "67eb4e675e1e98d1d27f773aba6b0f13",
"assets/assets/images/iMockup%2520-%2520Google%2520Pixel%25208%2520Pro%2520(2).png": "394717554c7543849d4fc84b14722981",
"assets/assets/images/iMockup%2520-%2520Google%2520Pixel%25208%2520Pro.png": "710875c4a2fcf549c540622890f4605c",
"assets/assets/images/Logo.png": "be3eca18764147c7be5fc11da45cb80f",
"assets/assets/images/Picture1.png": "e3b67a1b8fe3eff910cdfde1fd429e7f",
"assets/assets/lotties/App%2520Development.json": "7a229c95d455f2259314fdb4a2991b74",
"assets/assets/lotties/Development.json": "b40668e9cfd7ac70de8068a65c1f2fe0",
"assets/assets/lotties/Mobile%2520Devops%2520icon.json": "742d6ef33a3dcc1f6a0a0f5d78ee3e9d",
"assets/assets/lotties/space%2520boy%2520developer.json": "056f203c1fc9b2061d57663a31ab7644",
"assets/FontManifest.json": "a7729e23c30ea591e8797e6a84ef1183",
"assets/fonts/MaterialIcons-Regular.otf": "22da150721ac7b1d7885c26491d92f8d",
"assets/NOTICES": "25ea029873c576b21ff5d3039620481c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "526aa40818448d15389d9ad99afab449",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0599340d2dbedfcb1621e4bced665c47",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "d751394ec7813f602f80222017585e2b",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "01d93e306d306a7697b20cfa61bba2a5",
"icons/Icon-192.png": "215b47c802711d65dcd52a0bd8215423",
"icons/Icon-512.png": "017ab9e727e0d2bc763b01e89a7bc630",
"icons/Icon-maskable-192.png": "215b47c802711d65dcd52a0bd8215423",
"icons/Icon-maskable-512.png": "017ab9e727e0d2bc763b01e89a7bc630",
"index.html": "a426f7277a6fef489ec542a73c4e9366",
"/": "a426f7277a6fef489ec542a73c4e9366",
"main.dart.js": "27dd8d072335672a009fd1143bb1ff0b",
"manifest.json": "9b191aef7ffe09d2f0d2a7d4307818cd",
"version.json": "3074b47ef35b08b27084f7816a5713f3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
