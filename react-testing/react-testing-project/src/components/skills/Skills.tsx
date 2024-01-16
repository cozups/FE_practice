import { SkillsProps } from './Skills.types';

export const Skills = (props: SkillsProps) => {
  const { skills } = props;
  return (
    <div>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
