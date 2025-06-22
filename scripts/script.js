$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

// Experience Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all experience boxes and modals
    const experienceBoxes = document.querySelectorAll('.experience .box');
    const modals = document.querySelectorAll('.experience-modal');
    const closeButtons = document.querySelectorAll('.experience-modal .close-btn');

    // Add click event to each experience box
    experienceBoxes.forEach(box => {
        box.addEventListener('click', function(e) {
            // Don't open modal if clicking on the learn more button
            if (e.target.closest('.learn-more-btn')) {
                return;
            }
            
            const experienceType = this.getAttribute('data-experience');
            const modal = document.getElementById(experienceType + '-modal');
            
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Add click event to learn more buttons
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering the box click event
            
            const box = this.closest('.box');
            const experienceType = box.getAttribute('data-experience');
            const modal = document.getElementById(experienceType + '-modal');
            
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal when clicking close button
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.experience-modal');
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    });

    // Close modal when clicking outside the modal content
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.experience-modal.active');
            if (activeModal) {
                activeModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
});

// Project Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Project modal functionality
    const projectModals = document.querySelectorAll('.project-modal');
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
    const closeBtns = document.querySelectorAll('.project-modal .close-btn');

    // Open project modal
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const modal = document.getElementById(projectId + '-modal');
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close project modal
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.project-modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Close modal when clicking outside
    projectModals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            projectModals.forEach(modal => {
                if (modal.classList.contains('active')) {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        }
    });
});