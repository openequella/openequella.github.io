# Contributing

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

We welcome contributions via both the raising of issues and submitting pull requests. But before you
do, please take a moment to consult the below.

## Chatting

If before any of the below you'd like to discuss an issue or some code, then come and chat with
us on one of the following platforms:

* [Users mailing list](https://groups.google.com/a/apereo.org/forum/#!forum/equella-users) - Most
  active, best for more usage centric questions
* [Developer mailing list](https://groups.google.com/a/apereo.org/forum/#!forum/equella-dev) - For
  discussing work on the code
* \#Equella channel in [Apereo's slack](https://apereo.slack.com/messages/C4KLR0C4U)

## Submitting Issues

Issues relating to the documentation are welcome. (For any issues relating to openEQUELLA itself,
please switch over to its repo.)

When raising issues, please try and be as detailed as possible. Links, line numbers, etc always
welcome.

## Contributing Code / Pull Requests

As per standard Apereo projects:  If you wish to contribute to Open EQUELLA itself, you should first
subscribe to the Open EQUELLA Google Group as outlined above and discuss your contributions with
the other developers. You will also need to sign a
[Contributor License Agreement](https://www.apereo.org/node/676).

But after that, as per usual GitHub, please first fork the project and then branch off `master` or a
stable branch (see below) to use a 'feature' branch.

Please ensure you provide [quality commit messages](https://chris.beams.io/posts/git-commit/),
and in the PR please detail what testing you have undertaken.

## Setting up a development environment

The site is served up by GitHub pages and is done so via a static [Jekyll](https://jekyllrb.com/)
site. As a result, you can readily run it locally.

As you make changes, it's best if you preview locally to see how they look. To do this we rely on
you having ruby and bundler installed on your machine. Use your system's method for installing ruby,
and then use `gem` to ensure you have system level bundler installed, e.g.

    $ gem install bundler

Once you've done that, go into the project's directory and install the dependencies and then serve
up the content with the local server:

    $ bundle install --path vendor/bundle
    $ bundle exec jekyll serve

As you then edit and save files, you should find the site is rebuilt automatically and you can
browse at http://localhost:4000/.
