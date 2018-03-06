#!/usr/bin/ruby

###################################################
# Ruby script to extract all the project details 
# from the project tiles in index.html and write
# to projects.json
# Also extracts devicons
###################################################

require 'json'

puts "=" * 50
puts "Start ruby script to extract project details"

# regex to extract data from each block
proj_id = /<div class="project-box" id="(?<project_id>\w+)">/
proj_anchor = /<span id="(?<project_anchor>.+)" class="project-anchor">/
proj_img = /<img src="(?<project_img>.+)" class="img-responsive"/
proj_title = /<div class="project-name">/
proj_description = /<div class="project-description">/
proj_github = /<i class="fa fa-github" aria-hidden="true">/
proj_html = /<a href="(?<project_html>.+?)"/
proj_demo = /<i class="fa fa-television" aria-hidden="true">/

dev_icon = /<i class="languageIcon (?<devicon>.+)">/

projects = [] # array of hashes
project = {} # hash for each project

devicons = [] # array of devicons

# loops through index.html to extract the details of
# each project

File.open("../index.html") do |file|
  lines = file.readlines
  lines.each_with_index do |line, index|
    if (pid = line.match(proj_id))
      project['id'] = pid['project_id']
    elsif (pid = line.match(proj_anchor))
      project['anchor'] = pid['project_anchor']
    elsif (pid = line.match(proj_img))
      project['img'] = pid['project_img']
    elsif (pid = line.match(proj_title))
      project['title'] = lines[index+1].strip
    elsif (pid = line.match(proj_description))
      project['description'] = lines[index+1].strip
    elsif (pid = line.match(proj_github))
      pid = lines[index-1].match(proj_html)
      project['github'] = pid['project_html']
    elsif (pid = line.match(proj_demo))
      pid = lines[index-1].match(proj_html)
      project['demo'] = pid['project_html']
      projects.push(project)
      project = {}
    elsif (pid = line.match(dev_icon))
      devicons.push(pid['devicon'])
    end
  end

  # writes to a .json file
  File.open('../data/projects.json', 'w+') do |file|
    file.write(JSON.pretty_generate(projects))
    puts "JSON file generated (projects.json)"
  end
  
  # writes to a .txt file
  File.open('../data/icons.txt', 'w+') do |file|
    file.write(devicons)
    puts "TXT file generated (icons.txt)"
  end
end

puts "=" * 50