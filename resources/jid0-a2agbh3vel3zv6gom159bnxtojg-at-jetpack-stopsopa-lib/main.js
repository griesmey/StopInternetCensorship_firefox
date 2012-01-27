// This is an active module of the griesrt (2) Add-on

exports.main = function() {
var pageworkers = require("page-worker");
var pageMod = require("page-mod");
var self = require("self");


LoadWidget(self);

pageMod.PageMod({
  include: ["http://www.60plus.org/*",
"http://www.disneyabctv.com/*",
"http://www.aba.com/ABAEF/default.htm*",
"http://www.afm.org/*",
"http://aftra.com/*",
"http://www.atr.org/*",
"http://www.publishers.org*",
"http://www.agentassociation.com/*",
"http://www.capitolnashville.com*",
"http://promonet.cbs.com/*",
"http://www.cengage.com*",
"http://www.uninetworks.tv/*",
"http://www.cwfa.org/*",
"http://www.csg.org/*",
"http://www.CMAworld.com/*",
"http://www.cmt.com/*",
"http://www.bydeluxe.com*",
"http://www.dga.org/*",
"http://www.ull.ac.uk/*",
"http://www.emicmg.com/*",
"http://www.emimusicpub.com*",
"http://videos.espn.com/*",
"http://www.fop.net/*",
"http://www.gospelmusic.org/*",
"http://www.graphicartistsguild.org/*",
"http://www.hachettebookgroup.com/*",
"http://www.harpercollins.co.in/*",
"http://www.hyperionbooks.com*",
"http://www.afma.com/*",
"http://www.itif.org*",
"http://www.iatse-intl.org/*",
"http://www.ibew.org/*",
"http://www.inta.org/*",
"http://www.iupa.org/*",
"http://www.umgnashville.com/*",
"http://www.macmillan.com/*",
"http://www.armchairgm.com*",
"http://www.brd.ro*",
"http://www.mcamusic.com.ph/*",
"http://www.umgnashville.com/*",
"http://www.minorleaguebaseball.com*",
"http://www.nam.org/*",
"http://www.nflplayers.com/*",
"http://www.nga.org/*",
"http://www.nlc.org/*",
"http://www.the-leader.com/*",
"http://www.nikebiz.com/*",
"http://www.pearsoned.com*",
"http://us.penguingroup.com/*",
"http://www.phrma.org/*",
"http://allafrica.com/*",
"http://www.providentlabelgroup.com/*",
"http://www.randomhouse.com*",
"http://www.republicnashville.com*",
"http://www.tomsnyder.com/*",
"http://www.sag.org/*",
"http://www.sony.net/*",
"http://www.sony.com/*",
"http://www.sonymusic.com/*",
"http://sonynashville.com*",
"http://www.perseusbooksgroup.com/*",
"http://usmayors.org*",
"http://www.publicintegrity.org*",
"http://www.truereligionbrandjeans.com/*",
"http://www.uschamber.com*",
"http://www.teamusa.org*",
"http://www.usta.com/*",
"http://www.universalmusic.com*",
"http://www.umusicpub.com/*",
"http://www.ketupa.net/viacom.htm*",
"http://www.corporate.visa.com*",
"http://www.wmg.com/*",
"http://www.wmg.com/*",
"http://www.wordrecords.com/*",
"http://www.zumba.com*"],
  contentScriptWhen: 'start',
  contentScript: 'window.location.href = \"http://www.facebook.com/StopSopaNow\";'
});


};

function LoadWidget(self) {
    require("widget").Widget({
  id: "stop-sopa",
  label: "STOP SOPA",
  contentURL: self.data.url("img/stopsopa.png"),
  onClick: function() {
    require("tabs").open({
    url: "http://www.facebook.com/StopSopaNow"
    })
  }
});
}