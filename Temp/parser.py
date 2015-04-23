import urllib, urllib2
import re
f=open('zenpencils.txt','r')

s=f.readlines()

url2 = 'http://localhost:4000/api/linkFI/'
"""
proxy_support = urllib2.ProxyHandler({"http":"http://www-proxy.us.oracle.com:80"})
opener = urllib2.build_opener(proxy_support)
urllib2.install_opener(opener)
"""
for i in s:
	x=i.find('value="')+7
	y=i[x:].find('"')  +x
	link = i[x:y]
	
	z=i.find('</option>')
	title = i[y+2:z]
	title = title[title.find('.')+1:]
	"""
	keywords = re.split('[:[^ ]]*',title)
	keywords = (" ".join(keywords))
	#print keywords
	newKeywords = []
	newKeywords = keywords.split()
	#print list(newKeywords)
	"""
	values = {'title':title,'link':link}
	print values
	data = urllib.urlencode(values)
	req = urllib2.Request(url2, data)
	rsp = urllib2.urlopen(req)
	print link
	print title
"""

http://zenpencils.com/comic/1-ralph-waldo-emerson-make-th')

req = urllib2.Request(url2, data)
req = urllib2.Request(url2, data)
rsp = urllib2.urlopen(req)
"""