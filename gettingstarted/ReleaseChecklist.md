# Release checklist

## Tasks
* Ensure all required issues have been fixed and tested for a release
* Check/update the previous language pack URL in the build.xml file in the root of the Source folder. 
``` 
<property name="prev.langpack.url" value="http://support.thelearningedge.com.au/downloads/6.1/Internationalisation/reference-language-pack.zip"/>
``` 
* Release notes written, proof-read, uploaded to the Equella GitHib
* Confirm with testers which build number they have signed off on and tag this:
```
git tag -a 6.3-QA1
git push --tags
```
* Create a new branch if this is a GA release
```
git branch release/6.4
git push origin release/6.4
```
Switch to master, update the version number on line 2 of build.xml, and tag the next Alpha
```
git checkout master
scite build.xml
git commit -am "Update build number to 6.5"
git push

git tag -a 6.5-Alpha
git push --tags
```

* Copy to Releases folder 
* Clone an existing build in Jenkins if this is a GA release
1. Change the branch specifier
2. Change the previous language pack variable
* Final check that installers and upgraders work
* Run an automatic download + upgrade in the manager if this is a QA release
* Upload build artifacts into repo:
1. Language pack and language pack diff
2. Themes
3. Import/export tool
4. Report designers
5. Sample reports
6. Blank (or vanilla) institution
* Post on Aperero Website and Equella Google Group