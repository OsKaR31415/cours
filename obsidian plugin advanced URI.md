up::[[obsidian plugins]]
link::https://github.com/Vinzent03/obsidian-advanced-uri
#obsidian 
# obsidian plugin advanced URI

> [!tip]
> Use command line (my `urlencode` alias) to encode with the `%` notation

## Opening files

|                        | parameters                  | explanation                                                                                        |
| ---------------------- | --------------------------- | -------------------------------------------------------------------------------------------------- |
| workspace              | `workspace`                 | opens the workspace called `workspace`                                                             |
| save current workspace | `saveworkspace=true`        | Saves the current workspace. (Can be combined with `workspace` to open a new workspace afterwards) |
| file                   | `<identification>`          | opens file                                                                                         |
| line in file           | `<identification>, line`    | opens `line` in file                                                                               |
| heading                | `<identification>, heading` | opens `heading` in file                                                                            |
| block reference        | `<identification>, block`   | opens `block` in file                                                                              |
| settings tab           | `settingid`                 | opens a setting tab by id                                                                          |


> [!example] Examples
> Open **workspace** "main":
> `obsidian://advanced-uri?vault=<your-vault>&workspace=main`
> Open **heading** "Goal" in "my-file.md" (**Important:** Without syntax, only `Goal`):
> `obsidian://advanced-uri?vault=<your-vault>&filepath=my-file&heading=Goal`
> Open **block**-id "12345" in "my-file.md" (**Important:** Without syntax, only `12345`):
> `obsidian://advanced-uri?vault=<your-vault>&filepath=my-file&block=12345`


## Editing files

|           | parameters                   | explanation                                                       |
| --------- | ---------------------------- | ----------------------------------------------------------------- |
| write     | `<id>, data`                 | Only writes `data` to the file if the file is not already present |
| overwrite | `<id>, data, mode=overwrite` | writes `data` to `filepath` even if the file already exists       |
| append    | `<id>, data, mode=append`    | only append `data` to the file                                    |
| prepend   | `<id>, data, mode=prepend`   | only prepend `data` to the file                                   |
| new       | `<id>, data, mode=new`       | creates a new file. if `filepath` already exists, an incrementing number is appened                                                                  |

> [!example] Examples
> **Write** "Hello World" to "my-file.md":
> `obsidian://advanced-uri?vault=cours&filepath=my-file&data=Hello%2520World`
> **Overwrite** "This text is overwritten" to "my-file.md":
> `obsidian://advanced-uri?vault=<your-vault>&filepath=my-file&data=This%2520text%2520is%2520overwritten&mode=overwrite`
> **Append** "Hello World" to today's **daily note**:
> `obsidian://advanced-uri?vault=<your-vault>&daily=true&data=Hello%2520World&mode=append`
> **Append** content from the **clipboard** to today's **daily note**:
> `obsidian://advanced-uri?vault=<your-vault>&daily=true&clipboard=true&mode=append`


## Navigation parameters
### View modes
Just put one of the following parameters :
 - `source`: sets to "reading: source mode"
 - `live`: sets to "reading: live mode"
 - `preview`: sets to preview mode

### Open in new pane
the `newpane` parameters tell if the uri should be opened in a new pane
accepts `newpane=true` or `newpane=false`