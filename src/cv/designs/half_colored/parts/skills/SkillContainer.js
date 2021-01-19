import styled from '@emotion/styled';
/** @jsx jsx */
import { useTheme, css, jsx } from '@emotion/react';
import { motion } from 'framer-motion';

const SkillContainer = ({ skills, color, bgColor }) => {
  const theme = useTheme();

  const SkillGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    ${theme.breakpoints.md} {
      grid-template-columns: 1fr 1fr;
    }
    grid-template-rows: auto;
    gap: 20px 20px;
  `;

  const OuterSkill = styled.div`
    margin-top: 8px;
    width: 100%;
    height: 10px;
    background-color: ${bgColor};
  `;

  return (
    <SkillGrid>
      {skills.map((skill) => (
        <div key={skill.skill}>
          <h6>{skill.skill}</h6>
          <OuterSkill>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 1.1 }}
              css={css`
                height: 100%;
                background-color: ${color};
              `}
            />
          </OuterSkill>
        </div>
      ))}
    </SkillGrid>
  );
};

export default SkillContainer;
