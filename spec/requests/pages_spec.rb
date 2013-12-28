require 'spec_helper'

describe "pages" do

  describe "Home page" do

    it "should have the content 'Portfolio'" do
      visit '/pages/home'
      expect(page).to have_content('Portfolio')
    end
  end

  describe "Work page" do

    it "should have the content 'Work'" do
      visit '/pages/work'
      expect(page).to have_content('Work')
    end
  end
  
    describe "About page" do

    it "should have the content 'About'" do
      visit '/pages/about'
      expect(page).to have_content('About')
    end
  end
end