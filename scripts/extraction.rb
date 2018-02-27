#!/usr/bin/ruby
require 'pp'
require 'json'

puts "=" * 20
puts "Start ruby script"

proj_id = /<div class="project-box" id="(?<project_id>\w+)">/
proj_anchor = /<span id="(?<project_anchor>.+)" class="project-anchor">/
proj_img = /<img src="(?<project_img>.+)" class="img-responsive"/
proj_title = /<div class="project-name">/
proj_description = /<div class="project-description">/
proj_github = /<i class="fa fa-github" aria-hidden="true">/
proj_html = /<a href="(?<project_html>.+?)"/
proj_demo = /<i class="fa fa-television" aria-hidden="true">/

projects = []
project = {}

File.open("../index.html") do |file|
  lines = file.readlines
  lines.each_with_index do |line, index|
    if (pid = line.match(proj_id))
      # puts "Project id: #{pid['project_id']}"
      project['id'] = pid['project_id']
    elsif (pid = line.match(proj_anchor))
      # puts "\tProject anchor: #{pid['project_anchor']}"
      project['anchor'] = pid['project_anchor']
    elsif (pid = line.match(proj_img))
      # puts "\tProject image: #{pid['project_img']}"
      project['img'] = pid['project_img']
    elsif (pid = line.match(proj_title))
      # puts "\tProject title: #{lines[index+1].strip}"
      project['title'] = lines[index+1].strip
    elsif (pid = line.match(proj_description))
      # puts "\tProject description: #{lines[index+1].strip}"
      project['description'] = lines[index+1].strip
    elsif (pid = line.match(proj_github))
      pid = lines[index-1].match(proj_html)
      # puts "\tProject Github link: #{pid['project_html']}"
      project['github'] = pid['project_html']
    elsif (pid = line.match(proj_demo))
      pid = lines[index-1].match(proj_html)
      # puts "\tProject Demo website: #{pid['project_html']}"
      project['demo'] = pid['project_html']
      # puts project
      projects.push(project)
      project = {}
    end
  end

  File.open('./projects.json', 'w+') do |file|
    file.write(JSON.pretty_generate(projects))
  end
end

puts "JSON file generated"
puts "=" * 20