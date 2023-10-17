# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController # BlogPostsController is a subclass of ApplicationController and it get inheretance from ApplicationController
  def index
    # ---2)
    @posts = BlogPost.all # @post is an instance variable that stores aall the data from BlogPost
  end

  # ---3)
  def show # show is a method that will locate a specific BlogPost
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  def new # new is a method that initializes a new instance of BlogPost
    @post = BlogPost.new
  end

  def create
    # ---5)
    @post = BlogPost.create(blog_post_params) # creates a new record for BlogPost, and set what attributes we permit and extract
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    @post = BlogPost.find(params[:id]) # this will locate a specific record with the id that matched the value  provided in "params[:id]"
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    @post.update(blog_post_params) # this will update the attributes of the record that its given
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      redirect_to blog_posts_path # will redirect back to the blog post page
    end
  end

  # ---9)
  private # this will define the method as a private
  def blog_post_params
    # ---10)
    params.require(:blog_post).permit(:title, :content) # this ensures that only title and content attributes from the params are permitted
  end
end
