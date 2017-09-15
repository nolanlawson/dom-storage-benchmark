(function () {
  var $ = document.querySelector.bind(document)
  var container = $('#container')
  var iterationsInput = $('#iterations')
  var display = $('#display')
  var localStorageType = $('#localStorageType')
  var sessionStorageType = $('#sessionStorageType')

  // generated with https://www.json-generator.com/
  var randomJson = "[{\"_id\":\"59bc3264b468f00e28bcb165\",\"index\":0,\"guid\":\"69fea52a-0830-4b4c-bd0b-1105e4fbdef1\",\"isActive\":true,\"balance\":\"$1,294.87\",\"picture\":\"http://placehold.it/32x32\",\"age\":21,\"eyeColor\":\"blue\",\"name\":\"Bonner Wise\",\"gender\":\"male\",\"company\":\"ZILLAR\",\"email\":\"bonnerwise@zillar.com\",\"phone\":\"+1 (884) 566-3100\",\"address\":\"756 Ashland Place, Rose, Louisiana, 8811\",\"about\":\"Laboris ut laborum velit et veniam cupidatat nulla proident. Aliqua excepteur magna duis incididunt sint. Lorem mollit ea ullamco incididunt anim. Occaecat dolore exercitation sit laborum proident labore culpa cupidatat adipisicing id nisi amet. Enim dolor cupidatat velit dolore eiusmod cupidatat et. Labore officia ut aliquip incididunt nisi officia ut mollit sint id proident minim ea.\\r\\n\",\"registered\":\"2015-09-06T03:56:52 +07:00\",\"latitude\":5.76075,\"longitude\":135.633292,\"tags\":[\"non\",\"mollit\",\"dolor\",\"ut\",\"et\",\"ut\",\"dolor\"],\"friends\":[{\"id\":0,\"name\":\"May Hoover\"},{\"id\":1,\"name\":\"Chelsea Massey\"},{\"id\":2,\"name\":\"Marie Craig\"}],\"greeting\":\"Hello, Bonner Wise! You have 6 unread messages.\",\"favoriteFruit\":\"strawberry\"},{\"_id\":\"59bc3264115047bb4463abfa\",\"index\":1,\"guid\":\"408418e5-d54a-4338-91fa-46403c4ffae3\",\"isActive\":true,\"balance\":\"$3,886.44\",\"picture\":\"http://placehold.it/32x32\",\"age\":40,\"eyeColor\":\"blue\",\"name\":\"Hays Ross\",\"gender\":\"male\",\"company\":\"REALYSIS\",\"email\":\"haysross@realysis.com\",\"phone\":\"+1 (952) 534-3280\",\"address\":\"190 Preston Court, Blanco, Michigan, 9074\",\"about\":\"Cupidatat voluptate eu dolore fugiat excepteur. Labore duis laborum culpa culpa et in. Labore adipisicing ex non dolore exercitation in proident ex commodo elit consequat occaecat esse. Eu qui id nisi ad sunt. Officia qui nulla consequat aute enim et consectetur incididunt amet proident id anim ex et. Est anim nostrud anim culpa occaecat sunt consectetur nulla nisi veniam.\\r\\n\",\"registered\":\"2017-02-06T04:12:03 +08:00\",\"latitude\":-36.746986,\"longitude\":-56.071328,\"tags\":[\"ullamco\",\"consequat\",\"proident\",\"cupidatat\",\"officia\",\"eu\",\"elit\"],\"friends\":[{\"id\":0,\"name\":\"Yang Hogan\"},{\"id\":1,\"name\":\"Lorna Hensley\"},{\"id\":2,\"name\":\"Fletcher Fletcher\"}],\"greeting\":\"Hello, Hays Ross! You have 4 unread messages.\",\"favoriteFruit\":\"banana\"},{\"_id\":\"59bc32646520ceb537f62695\",\"index\":2,\"guid\":\"c8981edf-6c8f-4f7a-8c2e-f5a1a5523014\",\"isActive\":true,\"balance\":\"$2,285.54\",\"picture\":\"http://placehold.it/32x32\",\"age\":23,\"eyeColor\":\"blue\",\"name\":\"Kirk Sharpe\",\"gender\":\"male\",\"company\":\"BOLAX\",\"email\":\"kirksharpe@bolax.com\",\"phone\":\"+1 (813) 567-2108\",\"address\":\"485 Atkins Avenue, Falconaire, Maine, 4188\",\"about\":\"Eiusmod laboris mollit enim id. Aute sit proident in labore ex aute consectetur aute labore cupidatat ut. Fugiat ullamco officia qui tempor eiusmod mollit voluptate consectetur reprehenderit deserunt quis cillum. Non dolore incididunt ex tempor. Velit velit enim et sint labore amet non aliquip proident ex sint duis ipsum.\\r\\n\",\"registered\":\"2015-03-02T09:54:47 +08:00\",\"latitude\":50.106776,\"longitude\":106.00171,\"tags\":[\"veniam\",\"ea\",\"eiusmod\",\"sint\",\"ipsum\",\"est\",\"deserunt\"],\"friends\":[{\"id\":0,\"name\":\"Amanda Weiss\"},{\"id\":1,\"name\":\"Constance Cohen\"},{\"id\":2,\"name\":\"Elisabeth Horton\"}],\"greeting\":\"Hello, Kirk Sharpe! You have 7 unread messages.\",\"favoriteFruit\":\"apple\"},{\"_id\":\"59bc32645401f79d0c7d91ae\",\"index\":3,\"guid\":\"415a76af-b9d1-48ee-801b-0d9bf3177a41\",\"isActive\":false,\"balance\":\"$3,039.51\",\"picture\":\"http://placehold.it/32x32\",\"age\":22,\"eyeColor\":\"green\",\"name\":\"Trina Pitts\",\"gender\":\"female\",\"company\":\"FOSSIEL\",\"email\":\"trinapitts@fossiel.com\",\"phone\":\"+1 (911) 503-3423\",\"address\":\"204 Lake Street, Kimmell, Arizona, 3354\",\"about\":\"Est deserunt enim aliquip aute. Qui tempor in est officia elit id. Ullamco laboris nostrud dolor commodo amet minim ipsum. Ut amet mollit irure labore cupidatat tempor reprehenderit do ad. Enim magna sit cillum aute cillum consequat nostrud do consequat excepteur est eiusmod nulla officia. Ex dolor in nulla dolor minim.\\r\\n\",\"registered\":\"2017-05-29T07:34:28 +07:00\",\"latitude\":73.165651,\"longitude\":-80.502689,\"tags\":[\"quis\",\"quis\",\"laboris\",\"reprehenderit\",\"dolore\",\"qui\",\"velit\"],\"friends\":[{\"id\":0,\"name\":\"Valeria Ward\"},{\"id\":1,\"name\":\"Moran Harding\"},{\"id\":2,\"name\":\"Tara Figueroa\"}],\"greeting\":\"Hello, Trina Pitts! You have 3 unread messages.\",\"favoriteFruit\":\"banana\"},{\"_id\":\"59bc3264ef0918a332f9dfb7\",\"index\":4,\"guid\":\"24349114-3c90-42fb-bdee-501ab4aae306\",\"isActive\":false,\"balance\":\"$1,776.61\",\"picture\":\"http://placehold.it/32x32\",\"age\":24,\"eyeColor\":\"blue\",\"name\":\"Jaime Finch\",\"gender\":\"female\",\"company\":\"ISOLOGICA\",\"email\":\"jaimefinch@isologica.com\",\"phone\":\"+1 (894) 408-3963\",\"address\":\"875 Elm Place, Harold, Virgin Islands, 6183\",\"about\":\"Ipsum duis amet elit veniam sit. Do fugiat ea duis in ut cupidatat voluptate elit exercitation qui pariatur. Aliquip est quis eu eu dolor dolor veniam anim et enim ex eiusmod id est.\\r\\n\",\"registered\":\"2016-12-08T01:20:48 +08:00\",\"latitude\":57.106322,\"longitude\":120.27841,\"tags\":[\"ipsum\",\"proident\",\"consequat\",\"proident\",\"ullamco\",\"nisi\",\"dolor\"],\"friends\":[{\"id\":0,\"name\":\"Bernard Norman\"},{\"id\":1,\"name\":\"Robin Wall\"},{\"id\":2,\"name\":\"Kent Duke\"}],\"greeting\":\"Hello, Jaime Finch! You have 4 unread messages.\",\"favoriteFruit\":\"banana\"},{\"_id\":\"59bc32644cd50d842d82e756\",\"index\":5,\"guid\":\"882ed4ce-97f0-4a9b-b0d1-f86871f42886\",\"isActive\":true,\"balance\":\"$1,126.03\",\"picture\":\"http://placehold.it/32x32\",\"age\":34,\"eyeColor\":\"green\",\"name\":\"Tania Holloway\",\"gender\":\"female\",\"company\":\"MEMORA\",\"email\":\"taniaholloway@memora.com\",\"phone\":\"+1 (962) 513-2584\",\"address\":\"769 Utica Avenue, Whipholt, Hawaii, 7413\",\"about\":\"Non ea do deserunt veniam sunt labore et occaecat voluptate consequat anim velit consequat velit. Occaecat qui et nostrud reprehenderit pariatur ipsum eu ad excepteur elit do. Enim nostrud dolor in magna. Irure fugiat excepteur adipisicing est Lorem sint adipisicing sit excepteur qui eiusmod velit.\\r\\n\",\"registered\":\"2015-11-06T01:41:57 +08:00\",\"latitude\":-12.971865,\"longitude\":31.184517,\"tags\":[\"nulla\",\"deserunt\",\"non\",\"eiusmod\",\"sint\",\"dolore\",\"eiusmod\"],\"friends\":[{\"id\":0,\"name\":\"Hodge Raymond\"},{\"id\":1,\"name\":\"Castillo Lane\"},{\"id\":2,\"name\":\"Beth Warner\"}],\"greeting\":\"Hello, Tania Holloway! You have 6 unread messages.\",\"favoriteFruit\":\"banana\"},{\"_id\":\"59bc32640b93676ab9e78545\",\"index\":6,\"guid\":\"edcda837-3e33-4a74-885e-22092e033294\",\"isActive\":true,\"balance\":\"$2,384.88\",\"picture\":\"http://placehold.it/32x32\",\"age\":27,\"eyeColor\":\"green\",\"name\":\"Essie Baldwin\",\"gender\":\"female\",\"company\":\"EMOLTRA\",\"email\":\"essiebaldwin@emoltra.com\",\"phone\":\"+1 (928) 413-2824\",\"address\":\"527 Stockholm Street, Graniteville, Guam, 6298\",\"about\":\"Laborum sint esse ullamco eiusmod velit id ipsum do minim commodo cillum ex in. Cupidatat labore adipisicing deserunt esse mollit elit nulla quis sunt esse ut aliqua mollit consectetur. Laborum minim eu do qui sunt ullamco. Nisi anim magna velit nostrud aute ea laborum ullamco consequat. Enim ut quis culpa adipisicing et cupidatat deserunt duis reprehenderit proident. Adipisicing excepteur quis nulla quis exercitation magna laborum deserunt excepteur.\\r\\n\",\"registered\":\"2015-12-24T09:26:22 +08:00\",\"latitude\":-34.177254,\"longitude\":125.856892,\"tags\":[\"deserunt\",\"nulla\",\"labore\",\"mollit\",\"labore\",\"ex\",\"do\"],\"friends\":[{\"id\":0,\"name\":\"Silvia Wilder\"},{\"id\":1,\"name\":\"Jill Cruz\"},{\"id\":2,\"name\":\"Lyons Calhoun\"}],\"greeting\":\"Hello, Essie Baldwin! You have 8 unread messages.\",\"favoriteFruit\":\"strawberry\"},{\"_id\":\"59bc3264c40f817c0f7bb94d\",\"index\":7,\"guid\":\"29dfd9e5-98d5-40a7-b0d8-ea8419204e6e\",\"isActive\":false,\"balance\":\"$3,911.99\",\"picture\":\"http://placehold.it/32x32\",\"age\":33,\"eyeColor\":\"brown\",\"name\":\"Jeanette Vega\",\"gender\":\"female\",\"company\":\"SONGBIRD\",\"email\":\"jeanettevega@songbird.com\",\"phone\":\"+1 (833) 504-3738\",\"address\":\"895 Batchelder Street, Kersey, Texas, 7550\",\"about\":\"Ad cillum cillum nisi exercitation. Veniam qui incididunt anim ea consequat ipsum labore. Exercitation ex voluptate aute nisi in aliqua velit labore eiusmod nisi ullamco ex deserunt esse. Commodo ex cillum ea nulla laborum sit.\\r\\n\",\"registered\":\"2016-11-21T07:57:19 +08:00\",\"latitude\":80.830874,\"longitude\":151.874938,\"tags\":[\"nulla\",\"pariatur\",\"pariatur\",\"reprehenderit\",\"veniam\",\"consectetur\",\"nulla\"],\"friends\":[{\"id\":0,\"name\":\"Consuelo Melendez\"},{\"id\":1,\"name\":\"Mclaughlin Kaufman\"},{\"id\":2,\"name\":\"Jessie Gordon\"}],\"greeting\":\"Hello, Jeanette Vega! You have 7 unread messages.\",\"favoriteFruit\":\"apple\"},{\"_id\":\"59bc3264fff4d02925898c71\",\"index\":8,\"guid\":\"88a8984d-6f19-4012-863d-172512dea933\",\"isActive\":true,\"balance\":\"$1,262.65\",\"picture\":\"http://placehold.it/32x32\",\"age\":21,\"eyeColor\":\"green\",\"name\":\"Marlene Everett\",\"gender\":\"female\",\"company\":\"COMVERGES\",\"email\":\"marleneeverett@comverges.com\",\"phone\":\"+1 (944) 529-2895\",\"address\":\"359 Broadway , Marbury, American Samoa, 4981\",\"about\":\"Ut cillum fugiat nostrud duis commodo culpa eiusmod ut est aliqua sint. Quis aliquip anim quis aliquip ut laboris cillum exercitation. Labore tempor do tempor cillum duis irure labore eu. Aute mollit commodo ut amet enim et deserunt dolor commodo sunt est aliquip laborum consectetur.\\r\\n\",\"registered\":\"2015-10-30T02:34:54 +07:00\",\"latitude\":2.193226,\"longitude\":27.830625,\"tags\":[\"ex\",\"duis\",\"duis\",\"culpa\",\"commodo\",\"laborum\",\"duis\"],\"friends\":[{\"id\":0,\"name\":\"Black Ferguson\"},{\"id\":1,\"name\":\"Emily Vaughan\"},{\"id\":2,\"name\":\"Cleveland Wong\"}],\"greeting\":\"Hello, Marlene Everett! You have 6 unread messages.\",\"favoriteFruit\":\"apple\"},{\"_id\":\"59bc3264f24f3e42e0c12e0b\",\"index\":9,\"guid\":\"f69d4d59-91fa-460f-a8a3-c9e29b571277\",\"isActive\":false,\"balance\":\"$3,698.96\",\"picture\":\"http://placehold.it/32x32\",\"age\":22,\"eyeColor\":\"brown\",\"name\":\"Bertie Patterson\",\"gender\":\"female\",\"company\":\"APEX\",\"email\":\"bertiepatterson@apex.com\",\"phone\":\"+1 (817) 589-3369\",\"address\":\"199 Kane Street, Vincent, Idaho, 9306\",\"about\":\"Nisi ullamco reprehenderit mollit consequat incididunt consectetur dolore consequat non Lorem exercitation consequat enim. Ea in duis adipisicing non ipsum excepteur magna eu qui. Ullamco minim fugiat dolor fugiat aliqua culpa ad elit elit culpa adipisicing pariatur Lorem qui.\\r\\n\",\"registered\":\"2015-07-01T01:09:58 +07:00\",\"latitude\":-41.393313,\"longitude\":177.586089,\"tags\":[\"sint\",\"labore\",\"id\",\"sit\",\"adipisicing\",\"ex\",\"voluptate\"],\"friends\":[{\"id\":0,\"name\":\"Willie Hinton\"},{\"id\":1,\"name\":\"Brennan Ramirez\"},{\"id\":2,\"name\":\"Albert Carroll\"}],\"greeting\":\"Hello, Bertie Patterson! You have 5 unread messages.\",\"favoriteFruit\":\"apple\"},{\"_id\":\"59bc3264dee272a0060470c5\",\"index\":10,\"guid\":\"3c445094-cefa-4d83-bdac-945656a752f7\",\"isActive\":false,\"balance\":\"$2,498.03\",\"picture\":\"http://placehold.it/32x32\",\"age\":24,\"eyeColor\":\"green\",\"name\":\"Chambers Mitchell\",\"gender\":\"male\",\"company\":\"MEDALERT\",\"email\":\"chambersmitchell@medalert.com\",\"phone\":\"+1 (905) 471-2063\",\"address\":\"263 Robert Street, Sanborn, North Carolina, 8246\",\"about\":\"Eiusmod aliquip minim in eu non ipsum ipsum in. Non tempor deserunt pariatur occaecat culpa dolore enim cillum nisi. Ut proident pariatur ut ea officia sint magna consequat aliquip veniam. Consequat minim nostrud laborum aliquip qui labore. Nulla velit laborum est incididunt Lorem.\\r\\n\",\"registered\":\"2014-02-19T03:58:59 +08:00\",\"latitude\":84.717207,\"longitude\":-167.831198,\"tags\":[\"amet\",\"dolore\",\"nostrud\",\"quis\",\"sit\",\"incididunt\",\"sint\"],\"friends\":[{\"id\":0,\"name\":\"Dale Little\"},{\"id\":1,\"name\":\"Mitchell Conrad\"},{\"id\":2,\"name\":\"Mara Lyons\"}],\"greeting\":\"Hello, Chambers Mitchell! You have 2 unread messages.\",\"favoriteFruit\":\"strawberry\"},{\"_id\":\"59bc3264c51e63c89e731406\",\"index\":11,\"guid\":\"1b5aee88-dc78-441c-81b9-10093cbdd4c4\",\"isActive\":true,\"balance\":\"$2,490.86\",\"picture\":\"http://placehold.it/32x32\",\"age\":36,\"eyeColor\":\"brown\",\"name\":\"Bryan Church\",\"gender\":\"male\",\"company\":\"KIDGREASE\",\"email\":\"bryanchurch@kidgrease.com\",\"phone\":\"+1 (907) 432-2300\",\"address\":\"740 Cooper Street, Blue, New Hampshire, 7697\",\"about\":\"Anim amet dolore consequat adipisicing adipisicing enim cupidatat minim sint ad mollit qui anim. Eu officia laboris excepteur elit occaecat mollit culpa duis non mollit elit ut incididunt. Tempor dolor et tempor exercitation amet excepteur. Irure veniam consequat culpa in esse magna voluptate elit commodo excepteur esse sint. Labore anim nostrud veniam non consectetur nulla occaecat anim Lorem incididunt qui.\\r\\n\",\"registered\":\"2016-08-23T11:34:21 +07:00\",\"latitude\":19.750919,\"longitude\":17.947093,\"tags\":[\"et\",\"ea\",\"quis\",\"ea\",\"amet\",\"amet\",\"dolore\"],\"friends\":[{\"id\":0,\"name\":\"Louella Greer\"},{\"id\":1,\"name\":\"Finley Bradley\"},{\"id\":2,\"name\":\"Ford Stein\"}],\"greeting\":\"Hello, Bryan Church! You have 5 unread messages.\",\"favoriteFruit\":\"strawberry\"},{\"_id\":\"59bc3264d3018fb81a561f29\",\"index\":12,\"guid\":\"2a1600ee-2b05-41c6-9aa8-f9eaf54be529\",\"isActive\":false,\"balance\":\"$3,248.64\",\"picture\":\"http://placehold.it/32x32\",\"age\":37,\"eyeColor\":\"green\",\"name\":\"Juana Osborn\",\"gender\":\"female\",\"company\":\"EPLODE\",\"email\":\"juanaosborn@eplode.com\",\"phone\":\"+1 (995) 581-3631\",\"address\":\"256 Adelphi Street, Jackpot, Missouri, 1355\",\"about\":\"Nostrud sunt enim ad tempor duis nisi deserunt id. Ullamco dolor laborum sint et dolor esse do. Ad eu nulla laboris ipsum. Quis consectetur aliqua ullamco aliquip incididunt magna ut id. Nisi aliquip exercitation officia nostrud sint ipsum deserunt anim eiusmod in esse id dolore ipsum.\\r\\n\",\"registered\":\"2017-08-15T02:55:03 +07:00\",\"latitude\":-11.600981,\"longitude\":-178.431801,\"tags\":[\"excepteur\",\"aute\",\"id\",\"voluptate\",\"cillum\",\"officia\",\"amet\"],\"friends\":[{\"id\":0,\"name\":\"Holden Booker\"},{\"id\":1,\"name\":\"Fuentes Spence\"},{\"id\":2,\"name\":\"Aurelia Smith\"}],\"greeting\":\"Hello, Juana Osborn! You have 4 unread messages.\",\"favoriteFruit\":\"apple\"},{\"_id\":\"59bc3264350fca5116394fc5\",\"index\":13,\"guid\":\"d4a93472-b43c-4d20-aeae-088bc0265e17\",\"isActive\":true,\"balance\":\"$1,075.74\",\"picture\":\"http://placehold.it/32x32\",\"age\":38,\"eyeColor\":\"brown\",\"name\":\"Leigh Frye\",\"gender\":\"female\",\"company\":\"GLUKGLUK\",\"email\":\"leighfrye@glukgluk.com\",\"phone\":\"+1 (873) 506-3276\",\"address\":\"777 Meserole Street, Takilma, Oregon, 7266\",\"about\":\"Nulla nulla eiusmod minim officia quis in. Esse mollit dolor consequat pariatur esse aliqua sit quis culpa incididunt dolor pariatur irure. Occaecat incididunt quis aliqua elit ex nisi fugiat. Velit nisi aute veniam occaecat ipsum culpa incididunt irure ut aliqua sit Lorem. Nulla proident dolore ut quis anim reprehenderit voluptate proident.\\r\\n\",\"registered\":\"2015-08-19T08:15:03 +07:00\",\"latitude\":47.450189,\"longitude\":179.864888,\"tags\":[\"commodo\",\"ex\",\"eiusmod\",\"labore\",\"irure\",\"aliquip\",\"mollit\"],\"friends\":[{\"id\":0,\"name\":\"Franks Lindsay\"},{\"id\":1,\"name\":\"Nola Jackson\"},{\"id\":2,\"name\":\"Finch Davenport\"}],\"greeting\":\"Hello, Leigh Frye! You have 4 unread messages.\",\"favoriteFruit\":\"apple\"},{\"_id\":\"59bc32647c80991d8039a2be\",\"index\":14,\"guid\":\"f1be8584-a79c-4aa9-99e9-685e71e4d601\",\"isActive\":true,\"balance\":\"$1,558.81\",\"picture\":\"http://placehold.it/32x32\",\"age\":29,\"eyeColor\":\"brown\",\"name\":\"Stephens Garrison\",\"gender\":\"male\",\"company\":\"DATACATOR\",\"email\":\"stephensgarrison@datacator.com\",\"phone\":\"+1 (971) 438-2663\",\"address\":\"858 Sandford Street, Deltaville, Federated States Of Micronesia, 7455\",\"about\":\"Officia quis in aute in ea non ex voluptate Lorem sunt nulla pariatur esse nulla. Culpa ut dolore sit quis velit dolor fugiat amet consequat commodo. Pariatur enim nisi duis amet mollit voluptate pariatur et eiusmod. Non esse non ea mollit laboris veniam ut veniam ipsum culpa.\\r\\n\",\"registered\":\"2017-08-26T09:33:15 +07:00\",\"latitude\":-65.88955,\"longitude\":94.965777,\"tags\":[\"culpa\",\"ex\",\"quis\",\"ex\",\"cupidatat\",\"irure\",\"voluptate\"],\"friends\":[{\"id\":0,\"name\":\"Lourdes Gilliam\"},{\"id\":1,\"name\":\"Selma England\"},{\"id\":2,\"name\":\"Gates Wilkinson\"}],\"greeting\":\"Hello, Stephens Garrison! You have 10 unread messages.\",\"favoriteFruit\":\"banana\"},{\"_id\":\"59bc3264f1ffba3b720e05f5\",\"index\":15,\"guid\":\"c11fae1e-4eb6-4d70-9530-6523592cea75\",\"isActive\":false,\"balance\":\"$3,617.14\",\"picture\":\"http://placehold.it/32x32\",\"age\":25,\"eyeColor\":\"green\",\"name\":\"Rocha Woodward\",\"gender\":\"male\",\"company\":\"INTERGEEK\",\"email\":\"rochawoodward@intergeek.com\",\"phone\":\"+1 (806) 598-3067\",\"address\":\"809 Branton Street, Forbestown, Delaware, 9807\",\"about\":\"Officia aliqua id dolore cillum et nulla cupidatat. Incididunt pariatur duis nisi occaecat qui. Ut do adipisicing quis proident et et ut laborum adipisicing magna ullamco nulla.\\r\\n\",\"registered\":\"2016-10-10T04:14:03 +07:00\",\"latitude\":-89.670114,\"longitude\":-154.002702,\"tags\":[\"voluptate\",\"sit\",\"aute\",\"enim\",\"consectetur\",\"proident\",\"occaecat\"],\"friends\":[{\"id\":0,\"name\":\"Tammi Sexton\"},{\"id\":1,\"name\":\"Brady Gould\"},{\"id\":2,\"name\":\"Madeleine Fuller\"}],\"greeting\":\"Hello, Rocha Woodward! You have 3 unread messages.\",\"favoriteFruit\":\"apple\"},{\"_id\":\"59bc3264e7356f771cddb6b0\",\"index\":16,\"guid\":\"c0c913cf-9412-49bd-9d66-319c93d2cd85\",\"isActive\":true,\"balance\":\"$3,650.64\",\"picture\":\"http://placehold.it/32x32\",\"age\":38,\"eyeColor\":\"blue\",\"name\":\"Elma Hansen\",\"gender\":\"female\",\"company\":\"RUBADUB\",\"email\":\"elmahansen@rubadub.com\",\"phone\":\"+1 (937) 440-3936\",\"address\":\"171 Beach Place, Carlton, Kansas, 3437\",\"about\":\"Ad nulla ea esse eu pariatur proident quis commodo ex. Qui duis excepteur eiusmod dolor dolore id. Nostrud consequat tempor incididunt ullamco incididunt minim qui ea eu ullamco officia veniam cupidatat anim. In proident pariatur reprehenderit mollit excepteur ullamco incididunt adipisicing nisi dolore consectetur. Eu laborum qui esse cillum ex. Aliqua ad culpa dolor ex amet elit voluptate occaecat minim minim magna pariatur culpa dolor. Dolor duis sint quis labore.\\r\\n\",\"registered\":\"2014-08-20T08:13:01 +07:00\",\"latitude\":1.924603,\"longitude\":-159.290846,\"tags\":[\"ipsum\",\"dolore\",\"qui\",\"non\",\"reprehenderit\",\"Lorem\",\"irure\"],\"friends\":[{\"id\":0,\"name\":\"Holt Schroeder\"},{\"id\":1,\"name\":\"Mullins Marks\"},{\"id\":2,\"name\":\"Johnnie Randolph\"}],\"greeting\":\"Hello, Elma Hansen! You have 2 unread messages.\",\"favoriteFruit\":\"banana\"},{\"_id\":\"59bc3264931ef8bc9c9b6cae\",\"index\":17,\"guid\":\"4c2fad39-9a9e-4b1f-a0dd-e1a0a22e16d4\",\"isActive\":false,\"balance\":\"$3,242.67\",\"picture\":\"http://placehold.it/32x32\",\"age\":29,\"eyeColor\":\"brown\",\"name\":\"Deloris Chang\",\"gender\":\"female\",\"company\":\"COLLAIRE\",\"email\":\"delorischang@collaire.com\",\"phone\":\"+1 (921) 409-3427\",\"address\":\"439 Roosevelt Place, Iberia, District Of Columbia, 7955\",\"about\":\"Laborum quis laboris excepteur voluptate. Et non fugiat excepteur nulla laboris. Ex sit sit culpa adipisicing voluptate minim irure. Ad veniam magna esse do sit fugiat velit fugiat cillum ipsum.\\r\\n\",\"registered\":\"2016-04-25T03:33:00 +07:00\",\"latitude\":-63.002554,\"longitude\":-61.332446,\"tags\":[\"ut\",\"aliquip\",\"et\",\"Lorem\",\"aute\",\"anim\",\"anim\"],\"friends\":[{\"id\":0,\"name\":\"Paulette Terry\"},{\"id\":1,\"name\":\"Leonard Sweeney\"},{\"id\":2,\"name\":\"Douglas Sykes\"}],\"greeting\":\"Hello, Deloris Chang! You have 8 unread messages.\",\"favoriteFruit\":\"banana\"},{\"_id\":\"59bc32640e8ef7385946e902\",\"index\":18,\"guid\":\"ce695e81-927e-4cb5-bbea-c18569bac34c\",\"isActive\":true,\"balance\":\"$3,452.94\",\"picture\":\"http://placehold.it/32x32\",\"age\":37,\"eyeColor\":\"green\",\"name\":\"Genevieve Gaines\",\"gender\":\"female\",\"company\":\"GENMY\",\"email\":\"genevievegaines@genmy.com\",\"phone\":\"+1 (961) 507-2218\",\"address\":\"667 Creamer Street, Cecilia, Kentucky, 3324\",\"about\":\"Proident officia quis commodo id ipsum culpa nostrud laboris consectetur dolore qui ut excepteur. Veniam elit dolor velit officia quis fugiat aliqua irure ad. Veniam amet eu excepteur quis exercitation consectetur non anim est ut anim ut esse veniam. Incididunt elit magna nostrud reprehenderit irure consectetur.\\r\\n\",\"registered\":\"2015-08-04T04:53:11 +07:00\",\"latitude\":30.750681,\"longitude\":169.545351,\"tags\":[\"esse\",\"est\",\"qui\",\"aliqua\",\"deserunt\",\"eiusmod\",\"eiusmod\"],\"friends\":[{\"id\":0,\"name\":\"Madelyn Thomas\"},{\"id\":1,\"name\":\"Carrillo Burris\"},{\"id\":2,\"name\":\"Marcia Hale\"}],\"greeting\":\"Hello, Genevieve Gaines! You have 6 unread messages.\",\"favoriteFruit\":\"strawberry\"},{\"_id\":\"59bc3264fc64576af47f24fc\",\"index\":19,\"guid\":\"93813214-30ac-43cc-9a04-b340ee744f26\",\"isActive\":true,\"balance\":\"$3,014.81\",\"picture\":\"http://placehold.it/32x32\",\"age\":25,\"eyeColor\":\"green\",\"name\":\"Graham Dorsey\",\"gender\":\"male\",\"company\":\"COMDOM\",\"email\":\"grahamdorsey@comdom.com\",\"phone\":\"+1 (920) 471-3170\",\"address\":\"709 Arlington Place, Malott, Palau, 6138\",\"about\":\"Sunt sit consectetur ut est aliqua occaecat in labore ex mollit et. Nisi elit velit ea incididunt dolor occaecat nulla Lorem aliqua aute excepteur adipisicing. Elit aute quis sint ad ex cupidatat aute commodo laboris voluptate.\\r\\n\",\"registered\":\"2016-03-12T09:24:29 +08:00\",\"latitude\":-29.156423,\"longitude\":-171.464946,\"tags\":[\"in\",\"elit\",\"ullamco\",\"quis\",\"cillum\",\"tempor\",\"et\"],\"friends\":[{\"id\":0,\"name\":\"Marisol Leon\"},{\"id\":1,\"name\":\"Lucy Molina\"},{\"id\":2,\"name\":\"Lacey Schwartz\"}],\"greeting\":\"Hello, Graham Dorsey! You have 2 unread messages.\",\"favoriteFruit\":\"banana\"}]"

  var scenarios = [
    {
      name: 'Write large JSON object',
      setup: function (storage) {
        return JSON.parse(storage.getItem('json') || randomJson)
      },
      test: function (storage, storedObject) {
        storedObject[4].isActive = !storedObject[4].isActive
        storage.setItem('json', JSON.stringify(storedObject))
      }
    },
    {
      name: 'Write multiple small strings',
      setup: function () {
        var keys = []
        for (var i = 0; i < 1000; i ++) {
          var key = btoa('' + i + (i + 1) + (i + 2) + (i + 3) + (i + 4) + (i + 5) + (i + 6))
          keys.push(key)
        }
        return keys
      },
      test: function (storage, keys) {
        for (var i = 0; i < 1000; i ++) {
          storage.setItem(keys[i], '')
        }
      }
    },
    {
      name: 'Remove large JSON object',
      setup: function (storage) {
        var object = JSON.parse(randomJson)
        storage.setItem('json', object)
      },
      test: function (storage) {
        storage.removeItem('json')
      }
    },
    {
      name: 'Read large JSON object',
      setup: function (storage) {
        var object = JSON.parse(randomJson)
        storage.setItem('json', object)
      },
      test: function (storage) {
        storage.getItem('json')
      }
    },
    {
      name: 'Get storage length',
      setup: function (storage) {
        for (var i = 0; i < 1000; i ++) {
          var key = btoa('' + i + (i + 1) + (i + 2) + (i + 3) + (i + 4) + (i + 5) + (i + 6))
          storage.setItem(key, '')
        }
      },
      test: function (storage) {
        return storage.length
      }
    },
    {
      name: 'Iterate through storage keys',
      setup: function (storage) {
        for (var i = 0; i < 1000; i ++) {
          var key = btoa('' + i + (i + 1) + (i + 2) + (i + 3) + (i + 4) + (i + 5) + (i + 6))
          storage.setItem(key, '')
        }
      },
      test: function (storage) {
        for (var i = 0; i < storage.length; i++) {
          storage.key(i)
        }
      }
    },
    {
      name: 'Clear storage',
      setup: function (storage) {
        for (var i = 0; i < 1000; i ++) {
          var key = btoa('' + i + (i + 1) + (i + 2) + (i + 3) + (i + 4) + (i + 5) + (i + 6))
          storage.setItem(key, '')
        }
      },
      test: function (storage) {
        storage.clear()
      }
    },
    {
      name: 'Send event to tab (1 iteration only)',
      setup: function (storage) {
        storage['trigger'] = ['a']
      },
      test: function (storage, _, callback) {
        var tab
        window.addEventListener('storage', function () {
          tab.close()
          callback()
        })
        tab = window.open('tab.html', '_blank')
        tab.focus()
      },
      async: true
    }

  ]

  scenarios.forEach(function (scenario) {
    var button = document.createElement('button')
    button.type = 'button'
    button.innerText = scenario.name
    button.addEventListener('click', function () {

      var storage = localStorageType.checked ? localStorage : sessionStorage

      function done() {
        performance.mark('end')
        performance.measure('total', 'start', 'end')
        var duration = performance.getEntriesByName('total').slice(-1)[0].duration
        performance.clearMarks()
        performance.clearMeasures()
        localStorage.clear()
        sessionStorage.clear()
        display.innerText = 'Duration: ' + duration + 'ms'
      }

      requestAnimationFrame(function () {
        display.innerText = 'Duration:'
        var iterations = parseInt(iterationsInput.value, 10)
        var setupObj = scenario.setup(storage)
        performance.mark('start')
        if (scenario.async) {
          scenario.test(storage, setupObj, done)
        } else {
          for (var i = 0; i < iterations; i++) {
            scenario.test(storage, setupObj)
          }
          done()
        }
      })
    })
    container.appendChild(button)
  })

})()
