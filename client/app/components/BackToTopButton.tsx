'use client';

import { useEffect, useState } from 'react';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconArrowUp } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down more than 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 1500,
          }}
        >
          <Tooltip label="Back to top" position="left" withArrow>
            <ActionIcon
              onClick={scrollToTop}
              size="lg"
              radius="md"
              style={{
                background: 'linear-gradient(135deg, #ffa500, #ff8c00)',
                boxShadow: '0 4px 12px rgba(255, 165, 0, 0.3)',
              }}
              className="back-to-top-btn"
              aria-label="Back to top"
            >
              <IconArrowUp size={20} color="white" stroke={2.5} />
            </ActionIcon>
          </Tooltip>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
