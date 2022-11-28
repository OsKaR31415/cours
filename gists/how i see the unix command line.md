---
gists:
  - id: 88e29cabd85f710168ad836523fde914
    url: 'https://gist.github.com/88e29cabd85f710168ad836523fde914'
    createdAt: '2022-09-28T08:37:00Z'
    updatedAt: '2022-09-28T08:37:00Z'
    filename: how i see the unix command line.md
    isPublic: true
---
# How I see the UNIX command line

**Important :** When I use the term "command line", I really mean "UNIX command line", or at least "UNIX-like command line" (including Linux's, macOS's, BSD's command lines, bash, zsh, csh, or any command line that works like them).

## The command line

The [command line](https://en.wikipedia.org/wiki/Command-line_interface) is well known to be a very powerful tool for programmers : it allows the user to combine quickly, easily and in rich ways basically any utility, and therefore to automate and customize a lot of actions. It also permits a full control over what you do on your machine, since you can basically do anything.

But it is also a rough interface for anyone used to today's beautiful IDEs, where any action is one or two clicks of your mouse away, and where everything is "_plug and play_". Such smoothed interfaces exchange ability to automate, customize and combine things for ease of doing things that are already programmed. This is a serious advantage, especially for beginners, that can focus on what is really important (actually learning a programming language). And don't get me wrong : some IDEs have incredible features (like the ones from JetBrains), but even if they do _these things very well_, you are not able to change anything and to automate as much as you could with command line. The philosophy is different, for different use cases and different persons.

So here is a quick recap of why you should use the command line :
 - _control_ over basically everything (fine grain control over files, programs etc.)
 - _combine_ all the programs you have (all mechanisms to compose tools)
 - _automate_ the actions you often do or that are annoying or long (kind of the result of _control_ of _combine_)
And here is what the graphical apps are good at :
 - ease of learning (just click buttons)
 - quickly find how to do something (just click buttons)
 - have some proprietary ~~garbage~~ features like in the JetBrains IDEs

## The good, the bad and the ugly

Now that we know what are the powers of the command line, we can easily find what tools are actually good or bad for it.

Just once more, the command line is about _control_, _combine_ and _automate_.
So any good utility that integrates with the command line should have these properties, right ? 
 - _control_ : especially, fine control over specific things 
 - _combine_ : ability to integrate with other apps via the different standard mechanisms
 - _automate_ : again a mix of _control_ and _combine_

Obvious examples of good apps for the command line are the ones that are often shipped with it : basic ones like `cat`, `ls` (that are almost mandatory for using the command line), or more advanced ones like `grep`, `sort`, `uniq`, `xargs`, `find`, `sed`, `awk`...
All of these have common properties : they can combine with other apps in many ways, they do a specific thing and allow fine control of that specific action.

You also have "bad" command line apps : apps that don't combine well with other ones, or that don't allow any accurate control of what they do.

I added another section : the "ugly" apps, in my mind these are the apps that integrate quite well, but that feel "hacky", or weird, because they are _just working_, but not with proper foundations, neither with any stability nor robustness : they are tools that are just a little more complex than an automation, but not as well-made as real apps. We all have faced at least one of these apps, that often do something very specific, and they work, but you know that they probably won't resist a lot of updates on anything. I don't put them in the class of "bad" apps, because they can be perfectly integrated in the command line interface, but i call them "ugly" because they obviously should be avoided (it is always a problem to rely on dangerous software, so you may search for better alternatives, or create one yourself). These include some scripts that you may write yourself, and in which you don't put a lot of care because they are only for a precise purpose, and not made to be shared or used in production.

The usual way to describe what a "good" app should do is the _UNIX philosophy_ : in Unix, apps should "do one thing, but do it well", and then be able to connect with other tools. What I call "bad tools" are either tools that do too many things (but that is not always a problem), and most importantly that don't connect well with other apps. The main nuance is that I don't consider that apps should do one thing. I see how it is of good for an app to do only one thing, but I also use apps that do a couple of things, do them well, and still connects well and allows accurate control. One example is [tmux](https://github.com/tmux/tmux/wiki) : it is a _terminal_ multiplexer (allows you to make tabs and split windows inside a command line), but it also saves your session, meaning that if, for instance, your ssh connection is cut, nothing is lost (not even what is printed on screen). So `tmux` does two tings, but they work well together (when you connect to your command line, you just have to type `tmux attach` to get back to your previous session), and most importantly, you have a plenty of options and ways to connect it with other tools, that make it a very helpful app for working in the terminal. So really, for me, "good" UNIX apps are not limited to doing one thing. What I understand of that "rule" is that it is made so you don't create an "ugly" app, and so users can learn how to use the app, and not be overwhelmed by the amount of things your app does (a good example of that would be a user searching for a new app, while an app he's already using does it perfectly, but he isn't aware of that, because the app does too many things).

### The case of Emacs

[Emacs](https://www.gnu.org/software/emacs/) is an app that runs in the command line (but now also has a GUI). It is an extremely powerful programming environment, that basically allows you to do almost everything in Emacs (very advanced coding environment, calendar, browser, note-taking, emails, music...).
Emacs started as an advanced text editor, but with the years it grew and got to the point where it can embed basically everything.

According to the UNIX philosophy of "do one thing, but do it well", Emacs should be considered as a "bad" command line app, right ?

The special thing with Emacs is that the environment is not anymore the command line, but Emacs itself. Emacs has _control_, _composition_ and _automatization_, but not _with other UNIX apps_ : it has these between Emacs packages. So, for example, in Emacs, you can easily connect your email client, your calendar, your note-taking system etc.

What is important to understand is that this philosophy of _control_, _composition_ and _automatization_ is not at all limited to the command line (even if it is one of the places where it is the most important, and therefore the most implemented) : it can be realized anywhere to make any environment better.


## Conclusion

For me, what is important is that you use an environment that allows you to fulfill your goals.
Some of these goals may be to automate actions you often do, or to have a fine-grained control over how your tools behave.
There are other considerations, for instance the time it takes to master the said environment (obviously, it depends on what you want to do with it), or if it is able to handle a particular feature that you need.
Other environments have other ways to reach their goals.


> **Disclaimer :**
> In this article, I try to explain what I understand of some concepts and tools, in the hope that it will help some people to understand and use them.
> It is widely based on my personal opinions. You may not agree with me, and if so I would be pleased to know your opinion !
