up:: [[terminal commandes]]
link:: https://github.com/moretension/duti
#informatique 

Pour changer les applications par défaut pour ouvrir certains types de fichier.

> [!done] Avantages
> - permet de les changer sans redémarrer (contrairement aux fichiers de configuration)
> - simple à utiliser
> - permet plus de choses ques les réglages par défaut (pas limité à une extension à la fois)


> [!example]+ 
> - Set Safari as the default handler for HTML documents:
> 
> ```shell
> duti -s com.apple.Safari public.html all
> ```
> 
> - Set TextEdit as the default handler for Word documents:
> 
> ```shell
> echo 'com.apple.TextEdit   com.microsoft.word.doc all' | duti
> ```
> 
> - Set Finder as the default handler for ftp:// URLs:
> 
> ```shell
> duti -s com.apple.Finder ftp
> ```
> 
> - Get default application information for .jpg files:
> 
> ```shell
> duti -x jpg
> 
> # Output
> Preview
> /Applications/Preview.app
> com.apple.Preview
> ```
> 
