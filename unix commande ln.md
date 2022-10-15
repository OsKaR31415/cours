up::[[unix commandes]]
title::"`ln target_file new_file` [[unix liens symboliques et physiques|lien physique]]", "`ln -s target_file new_symlink` [[unix liens symboliques et physiques|lien symbolique]]"
#informatique/unix #review 

----

# Utilisation
```bash
$> ln target_file physical_link_file  # here a physical link
$> ln -s target_file symlink_file  # -s for symlinks 
$> ln -s target_dir symlink_dir  # symlinks also work with directories
