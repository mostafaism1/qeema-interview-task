-- departments.
insert into department(id, name, logo_url)
values (
        1,
        'Delivery',
        'logoUrl": "https://image.flaticon.com/icons/png/512/233/233664.png'
    );
call next value for hibernate_sequence;
insert into department(id, name, logo_url)
values (
        2,
        'Service Assurance',
        'logoUrl": "https://icon-library.com/images/icon-lens/icon-lens-10.jpg'
    );
call next value for hibernate_sequence;
insert into department(id, name, logo_url)
values (
        3,
        'Performance',
        'logoUrl": "https://cdn3.iconfinder.com/data/icons/car-12/128/car_speed-512.png'
    );
call next value for hibernate_sequence;
insert into department(id, name, logo_url)
values (
        4,
        'Financial',
        'logoUrl": "https://i.pinimg.com/originals/2e/4a/7c/2e4a7c832b0d2e3d722b20535661ab4d.jpg'
    );
call next value for hibernate_sequence;
insert into department(id, name, logo_url)
values (
        5,
        'Strategy Execution',
        'logoUrl": "https://image.flaticon.com/icons/png/512/1508/1508924.png'
    );
call next value for hibernate_sequence;
-- sections
insert into section(id, name, department_id)
values (1, 'Governence', 5);
call next value for hibernate_sequence;
insert into section(id, name, department_id)
values (2, 'Digital Transform', 5);
call next value for hibernate_sequence;
insert into section(id, name, department_id)
values (3, 'Operation Transform', 5);
call next value for hibernate_sequence;
insert into section(id, name, department_id)
values (4, 'Service Experience', 5);
call next value for hibernate_sequence;
insert into section(id, name, department_id)
values (5, 'Business Delivery', 5);
call next value for hibernate_sequence;
insert into section(id, name, department_id)
values (6, 'HCD', 5);
call next value for hibernate_sequence;
-- section_percent
insert into section_percent(id, percent, section_id)
values (1, 48, 1);
call next value for hibernate_sequence;
insert into section_percent(id, percent, section_id)
values (2, 33, 2);
call next value for hibernate_sequence;
insert into section_percent(id, percent, section_id)
values (3, 67, 3);
call next value for hibernate_sequence;
insert into section_percent(id, percent, section_id)
values (4, 44, 4);
call next value for hibernate_sequence;
insert into section_percent(id, percent, section_id)
values (5, 51, 5);
call next value for hibernate_sequence;
insert into section_percent(id, percent, section_id)
values (6, 80, 6);
call next value for hibernate_sequence;
-- milestone
insert into milestone(id, actual, planned, change)
values (1, 55, 80, 10);
call next value for hibernate_sequence;
insert into milestone(id, actual, planned, change)
values (2, 90, 90, 0);
call next value for hibernate_sequence;
-- department_milestones
insert into department_milestones(
        id,
        dtc_milestone_id,
        den_milestone_id,
        department_id
    )
values (1, 1, 2, 5);
call next value for hibernate_sequence;