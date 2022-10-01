=====
Forms
=====

Forms is a Django app containing different pages aleady styled for web authentication.
Users will be able to: login, logout, sign in, change password (when already logged),
reset password (if forgotten).

Detailed documentation is in the "docs" directory.

Quick start
-----------

1. Add "formd" to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = [
        ...
        'forms',
    ]

2. Include the polls URLconf in your project urls.py like this::

    path('', include('forms.urls')),

3. Run ``python manage.py migrate`` to create the tables needed in the database.

4. Start the development server and visit http://127.0.0.1:8000/admin/
   to check if eveything's working fine.

5. Visit http://127.0.0.1:8000/sign/ to create your first account.