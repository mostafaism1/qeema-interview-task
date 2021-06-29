drop table if exists department CASCADE;
drop table if exists department_milestones CASCADE;
drop table if exists milestone CASCADE;
drop table if exists section CASCADE;
drop table if exists section_percent CASCADE;
drop sequence if exists hibernate_sequence;
create sequence hibernate_sequence start with 1 increment by 1;
create table department (
    id bigint not null,
    logo_url varchar(255),
    name varchar(255),
    primary key (id)
);
create table department_milestones (
    id bigint not null,
    den_milestone_id bigint,
    dtc_milestone_id bigint,
    department_id bigint,
    primary key (id)
);
create table milestone (
    id bigint not null,
    actual integer not null,
    change integer not null,
    planned integer not null,
    primary key (id)
);
create table section (
    id bigint not null,
    name varchar(255),
    department_id bigint not null,
    primary key (id)
);
create table section_percent (
    id bigint not null,
    percent integer not null,
    section_id bigint,
    primary key (id)
);
alter table department
add constraint UK_1t68827l97cwyxo9r1u6t4p7d unique (name);
alter table section
add constraint UK_rwqtt5x96oahjdtqt20vxu4um unique (name);
alter table department_milestones
add constraint FK12xrsaper5gqqn2wcdqvds0ks foreign key (den_milestone_id) references milestone;
alter table department_milestones
add constraint FK4u9pr8vedm77bv2v6te1cx1v6 foreign key (dtc_milestone_id) references milestone;
alter table department_milestones
add constraint FKo4i6iemksy3hi1c8labehaxk6 foreign key (department_id) references department;
alter table section
add constraint FKte6p4d25dy5s85g2usl95v9kw foreign key (department_id) references department;
alter table section_percent
add constraint FKovq3xfvhexpol939bdal5rydq foreign key (section_id) references section;