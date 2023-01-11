up::[[vim plugins]]
link::https://github.com/tweekmonster/braceless.vim
title::"pour les langages à indentation sémantique"
#informatique/vim

----
Plugin pour mieux gérer les langages où l'indentation est sémantique (python...)

 - Meilleurs motions (`[[` pour les définitions python etc.)
 - text objects intelligents (blocks de codes plutôt que par indentation)

# Features
You can use `:BracelessEnable +feature` to enable `feature`

## Text objects
 - more intelligent than indented blocks
 - actual code blocks using `iP` and `aP`

![braceless-motions](https://cloud.githubusercontent.com/assets/111942/13040603/5da43e56-d37c-11e5-835a-2135d30451e2.gif)

## Object motions
 - move between blocks : `[[` and `]]` (any keyword)
 - move to `def` and `class`
     - `]m` and `[m` : beginning of these blocks
     - `]M` and `[M` : end of these blocks

![braceless-movement](https://cloud.githubusercontent.com/assets/111942/13040689/4a3bb9b0-d37d-11e5-985e-f94fe23b280c.gif)

## Folding
 - intelligent folding by adding `+fold`
     - **exciting** details in `:h braceless-folds`

![braceless-fold](https://cloud.githubusercontent.com/assets/111942/13040746/f5f29332-d37d-11e5-95b0-6b30a2f2adc1.gif)

## Indent guide
 - enable with `+highlight`
 - enable `colorcolumn` so the guide can span the height of the window
 - for other filetypes : [[vim plugin local-indent]]

![braceless-highlight](https://cloud.githubusercontent.com/assets/111942/13040915/11a1cf74-d380-11e5-8e56-da487f0536f8.gif)

## Somewhat intelligent auto-indent
 - intelligent autoindent when adding `+indent`
     - pep8 indentation built-in
     - temporarily the [[vim plugin delimitMate|delimitMate]] `expand_cr` when messing with block arguments (multi-line arguments)

![braceless-autoindent](https://cloud.githubusercontent.com/assets/111942/13276832/41eb5e76-da91-11e5-9d29-0537dd887f2b.gif)

(The backspace key was never used in the image above)

## EasyMotion
 - Built-in support for EasyMotion
     - search for important blocks (`def`, `class`)

![braceless-easymotion](https://cloud.githubusercontent.com/assets/111942/13041314/20748e02-d384-11e5-9387-30f5362cf3f4.gif)

## Not just Python!
Braceless can simply recognize indentation.

![braceless-others](https://cloud.githubusercontent.com/assets/111942/13052462/f87c07ce-d3cc-11e5-8024-328d58371e5d.gif)

The above GIF was using:

```
autocmd FileType haml,yaml,coffee BracelessEnable +indent +fold +highlight
```

You can extend Braceless to give full support to other indented languages. See `:h braceless-custom`
