<?php
$dir = "/Users/niklas/dev/remote-dev/inter-work-website/releases";
$pattern = '/\.(zip)$/';
$newstamp = 0;
$newname = "";

if ($handle = opendir($dir)) {
 while (false !== ($fname = readdir($handle)))  {
   // Eliminate current directory, parent directory
   if (preg_match('/^\.{1,2}$/',$fname)) continue;
   // Eliminate all but the permitted file types
   if (! preg_match($pattern,$fname)) continue;
   $timedat = filemtime("$dir/$fname");
   if ($timedat > $newstamp) {
      $newstamp = $timedat;
      $newname = $fname;
    }
   }
  }
closedir ($handle);

$filepath="$dir/$newname";
$etag = md5_file($filepath);

header("Content-type: application/gzip");
header("Content-Length: " . filesize($filepath));
header('Content-Disposition: attachment; filename="Inter-Work-Latest.zip"');
header("Accept-Ranges: bytes");
header("Last-Modified: ".gmdate("D, d M Y H:i:s", $newstamp)." GMT");
header("Etag: $etag");
readfile($filepath);
