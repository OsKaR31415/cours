---
annotate-target: "APL thinking examples.pdf"
---
# APL thinking




>%%
>```annotation-json
>{"created":"2022-06-04T12:13:42.448Z","updated":"2022-06-04T12:13:42.448Z","document":{"title":"APL thinking examples.pdf","link":[{"href":"urn:x-pdf:36781331487d52f3605f75c4bdd9e2a8"},{"href":"vault:/APL thinking examples.pdf"}],"documentFingerprint":"36781331487d52f3605f75c4bdd9e2a8"},"uri":"vault:/APL thinking examples.pdf","target":[{"source":"vault:/APL thinking examples.pdf","selector":[{"type":"TextPositionSelector","start":1220,"end":1274},{"type":"TextQuoteSelector","exact":"we must ask how APL helps (or hinders) problem-solving","prefix":"ge for thinking about problems, ","suffix":". Specifically, just what is uni"}]}]}
>```
>%%
>*%%PREFIX%%ge for thinking about problems,%%HIGHLIGHT%% ==we must ask how APL helps (or hinders) problem-solving== %%POSTFIX%%. Specifically, just what is uni*
>%%LINK%%[[#^xyls3stuyzk|show annotation]]
>%%COMMENT%%
>
>%%TAGS%%
>
^xyls3stuyzk


>%%
>```annotation-json
>{"text":"are parts of _APL thinking_ :\n\n - one liners\n - array (parallel) processing\n    - avoid branching, iteration and recursion\n    - combine cases\n    - work with large chunks\n    - do data-driven computing\n - notation (syntax and symbols themselves)\n - concise APL expressions\n - rich and powerful primitives\n - modularizing code (thanks to direct definitions)\n - ability to generalize\n - identities and proofs in formal reasoning\n\n\n","target":[{"source":"vault:/APL thinking examples.pdf","selector":[{"type":"TextPositionSelector","start":2889,"end":3734},{"type":"TextQuoteSelector","exact":"To some eeople, “APL thinking” suggests one-liners (expressions or defined functions). To others it means array (parallel) processing, thereby avoiding branching, iteration, and recursion: combining cases: working with large chunks: or doing data-driven computing. Some believe it lies in the notation -- syntax and the symbols themselves -- or in concise APL expressions, or in rich and powerful primitives. some relate it to modularizing code (epitomized by direct definition), or a “qlass box” program, or the propensity to generalize. A few attest that it involves use of identities and proofs in formal reasoning. It might also suggest tricky, contorted programming techniques. Further, it might even involve imagery, metaphors, and visualization of mental representations and transformations. Perhaps these are all aspects of APL thinking.","prefix":"iety of interpretations extant.","suffix":"We  have also recognized a numb"}]}],"created":"2022-06-04T12:39:42.674Z","updated":"2022-06-04T12:39:42.674Z","document":{"title":"APL thinking examples.pdf","link":[{"href":"urn:x-pdf:36781331487d52f3605f75c4bdd9e2a8"},{"href":"vault:/APL thinking examples.pdf"}],"documentFingerprint":"36781331487d52f3605f75c4bdd9e2a8"},"uri":"vault:/APL thinking examples.pdf"}
>```
>%%
>*%%PREFIX%%iety of interpretations extant.%%HIGHLIGHT%% ==To some eeople, “APL thinking” suggests one-liners (expressions or defined functions). To others it means array (parallel) processing, thereby avoiding branching, iteration, and recursion: combining cases: working with large chunks: or doing data-driven computing. Some believe it lies in the notation -- syntax and the symbols themselves -- or in concise APL expressions, or in rich and powerful primitives. some relate it to modularizing code (epitomized by direct definition), or a “qlass box” program, or the propensity to generalize. A few attest that it involves use of identities and proofs in formal reasoning. It might also suggest tricky, contorted programming techniques. Further, it might even involve imagery, metaphors, and visualization of mental representations and transformations. Perhaps these are all aspects of APL thinking.== %%POSTFIX%%We  have also recognized a numb*
>%%LINK%%[[#^c281zpherf7|show annotation]]
>%%COMMENT%%
>are parts of _APL thinking_ :
>
> - one liners
> - array (parallel) processing
>    - avoid branching, iteration and recursion
>    - combine cases
>    - work with large chunks
>    - do data-driven computing
> - notation (syntax and symbols themselves)
> - concise APL expressions
> - rich and powerful primitives
> - modularizing code (thanks to direct definitions)
> - ability to generalize
> - identities and proofs in formal reasoning
>
>
>
>%%TAGS%%
>
^c281zpherf7


>%%
>```annotation-json
>{"created":"2022-06-04T13:05:22.767Z","text":"The \"case-by-case\" approach here uses branching.\nThis implementation really is splitting the median in two cases : \n - if the list has an odd number of elements : take the middle element\n - if the list has an even number of elements : take the average of the two \"middle ones\"\n\n","updated":"2022-06-04T13:05:22.767Z","document":{"title":"APL thinking examples.pdf","link":[{"href":"urn:x-pdf:36781331487d52f3605f75c4bdd9e2a8"},{"href":"vault:/APL thinking examples.pdf"}],"documentFingerprint":"36781331487d52f3605f75c4bdd9e2a8"},"uri":"vault:/APL thinking examples.pdf","target":[{"source":"vault:/APL thinking examples.pdf","selector":[{"type":"TextPositionSelector","start":5445,"end":5543},{"type":"TextQuoteSelector","exact":"A straightforward, case-by-case approach directly translates the problem statement into APL code: ","prefix":"es for varied ways of thinking. ","suffix":"Q  Z+MEDIAN X;N Cl1 Z+XC  4x1 [2"}]}]}
>```
>%%
>*%%PREFIX%%es for varied ways of thinking.%%HIGHLIGHT%% ==A straightforward, case-by-case approach directly translates the problem statement into APL code:== %%POSTFIX%%Q  Z+MEDIAN X;N Cl1 Z+XC  4x1 [2*
>%%LINK%%[[#^uxm71iht2bj|show annotation]]
>%%COMMENT%%
>The "case-by-case" approach here uses branching.
>This implementation really is splitting the median in two cases : 
> - if the list has an odd number of elements : take the middle element
> - if the list has an even number of elements : take the average of the two "middle ones"
>
>
>%%TAGS%%
>
^uxm71iht2bj


>%%
>```annotation-json
>{"created":"2022-06-06T23:51:13.027Z","text":"This basically takes the two middle elements, either two times the exact middle if there is a odd number of elements, or the 2 middle elements if there is an even number of elements.\n\nThe indices are created using this part : `|⌈¯0.5 0.5×1+⍴X`\nand the rest is just indexing the sorted list and averaging these two numbers.","updated":"2022-06-06T23:51:13.027Z","document":{"title":"APL thinking examples.pdf","link":[{"href":"urn:x-pdf:36781331487d52f3605f75c4bdd9e2a8"},{"href":"vault:/APL thinking examples.pdf"}],"documentFingerprint":"36781331487d52f3605f75c4bdd9e2a8"},"uri":"vault:/APL thinking examples.pdf","target":[{"source":"vault:/APL thinking examples.pdf","selector":[{"type":"TextPositionSelector","start":5783,"end":5814},{"type":"TextQuoteSelector","exact":"0.sXtixcc4x)cIr-0.5 0.5xltpxJl ","prefix":"L community, is not so obvious: ","suffix":"(from [31, p. 328) APL novices o"}]}]}
>```
>%%
>*%%PREFIX%%L community, is not so obvious:%%HIGHLIGHT%% ==0.sXtixcc4x)cIr-0.5 0.5xltpxJl== %%POSTFIX%%(from [31, p. 328) APL novices o*
>%%LINK%%[[#^1i5i7m60gh1|show annotation]]
>%%COMMENT%%
>This basically takes the two middle elements, either two times the exact middle if there is a odd number of elements, or the 2 middle elements if there is an even number of elements.
>
>The indices are created using this part : `|⌈¯0.5 0.5×1+⍴X`
>and the rest is just indexing the sorted list and averaging these two numbers.
>%%TAGS%%
>
^1i5i7m60gh1


>%%
>```annotation-json
>{"created":"2022-06-07T00:06:36.045Z","text":"This would probably be written :\n`MEAN (SORT 2/DATA)[0 1+⍴DATA]`\n\nOr, once written as a dfns :\n`{+/+/2÷⍨D[⍋D←2/⍵][0 1+⍴⍵]}`\n\n","updated":"2022-06-07T00:06:36.045Z","document":{"title":"APL thinking examples.pdf","link":[{"href":"urn:x-pdf:36781331487d52f3605f75c4bdd9e2a8"},{"href":"vault:/APL thinking examples.pdf"}],"documentFingerprint":"36781331487d52f3605f75c4bdd9e2a8"},"uri":"vault:/APL thinking examples.pdf","target":[{"source":"vault:/APL thinking examples.pdf","selector":[{"type":"TextPositionSelector","start":7764,"end":7797},{"type":"TextQuoteSelector","exact":"MEAN (SORT DATA,DATA)CO ltpDATA1 ","prefix":" reproducing the entire vector: ","suffix":"This was of  feted spontaneously"}]}]}
>```
>%%
>*%%PREFIX%%reproducing the entire vector:%%HIGHLIGHT%% ==MEAN (SORT DATA,DATA)CO ltpDATA1== %%POSTFIX%%This was of  feted spontaneously*
>%%LINK%%[[#^yoee50jbmef|show annotation]]
>%%COMMENT%%
>This would probably be written :
>`MEAN (SORT 2/DATA)[0 1+⍴DATA]`
>
>Or, once written as a dfns :
>`{+/+/2÷⍨D[⍋D←2/⍵][0 1+⍴⍵]}`
>
>
>%%TAGS%%
>
^yoee50jbmef


>%%
>```annotation-json
>{"created":"2022-06-07T00:13:56.520Z","text":"The \"when is it worth\" is really asking _in what kind of problems does the APL thinking work better_.\n","updated":"2022-06-07T00:13:56.520Z","document":{"title":"APL thinking examples.pdf","link":[{"href":"urn:x-pdf:36781331487d52f3605f75c4bdd9e2a8"},{"href":"vault:/APL thinking examples.pdf"}],"documentFingerprint":"36781331487d52f3605f75c4bdd9e2a8"},"uri":"vault:/APL thinking examples.pdf","target":[{"source":"vault:/APL thinking examples.pdf","selector":[{"type":"TextPositionSelector","start":8410,"end":8477},{"type":"TextQuoteSelector","exact":"When is it worth trying to think of this kind of solution? And why?","prefix":"tes a higher-dimensional array. ","suffix":" These latter two approaches set"}]}]}
>```
>%%
>*%%PREFIX%%tes a higher-dimensional array.%%HIGHLIGHT%% ==When is it worth trying to think of this kind of solution? And why?== %%POSTFIX%%These latter two approaches set*
>%%LINK%%[[#^wpak1etipg8|show annotation]]
>%%COMMENT%%
>The "when is it worth" is really asking _in what kind of problems does the APL thinking work better_.
>
>%%TAGS%%
>
^wpak1etipg8


>%%
>```annotation-json
>{"created":"2022-06-07T00:16:37.030Z","text":"Is not that trying to overfit a primitive ?\nBut also, that is an _intelligent usage_ of the primitive (here Index).\nSo maybe the essence of \"APL thinking\" is having an intelligent usage of APL primitives...","updated":"2022-06-07T00:16:37.030Z","document":{"title":"APL thinking examples.pdf","link":[{"href":"urn:x-pdf:36781331487d52f3605f75c4bdd9e2a8"},{"href":"vault:/APL thinking examples.pdf"}],"documentFingerprint":"36781331487d52f3605f75c4bdd9e2a8"},"uri":"vault:/APL thinking examples.pdf","target":[{"source":"vault:/APL thinking examples.pdf","selector":[{"type":"TextPositionSelector","start":8506,"end":8595},{"type":"TextQuoteSelector","exact":"set up the data so an APL primitive function -- here Index -- can do the key job directly","prefix":"hy? These latter two approaches ","suffix":". Is this the essence of “APL th"}]}]}
>```
>%%
>*%%PREFIX%%hy? These latter two approaches%%HIGHLIGHT%% ==set up the data so an APL primitive function -- here Index -- can do the key job directly== %%POSTFIX%%. Is this the essence of “APL th*
>%%LINK%%[[#^01iuokhz347s|show annotation]]
>%%COMMENT%%
>Is not that trying to overfit a primitive ?
>But also, that is an _intelligent usage_ of the primitive (here Index).
>So maybe the essence of "APL thinking" is having an intelligent usage of APL primitives...
>%%TAGS%%
>
^01iuokhz347s
