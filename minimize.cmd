@echo off
cd /d %~dp0
java -jar %~d0/tools/closure-compiler.jar^
	--js src/rc4c.js^
	--js_output_file dist/rc4c.min.js
