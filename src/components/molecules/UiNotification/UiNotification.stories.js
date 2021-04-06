import UiNotification from '@/components/molecules/UiNotification/UiNotification.vue';
import UiAlert from '@/components/atoms/UiAlert/UiAlert.vue';
import UiLink from '@/components/atoms/UiLink/UiLink.vue';
import UiIcon from '@/components/atoms/UiIcon/UiIcon.vue';

export default {
  title: 'Molecules/Notification',
  component: UiNotification,
  subcomponents: { UiAlert },
  args: {
    content: 'Please try to add more than one symptom.',
    type: 'error',
  },
  argTypes: {
    content: { control: 'text' },
    type: { control: { type: 'select', options: ['success', 'info', 'warning', 'error'] } },
  },
};

const Template = (args) => ({
  components: { UiNotification, UiAlert },
  setup() { return { ...args }; },
  template: `<UiNotification :type="type">
    <UiAlert 
      :type="type" 
      class="ui-alert--secondary"
    >
      {{ content }}
    </UiAlert>
  </UiNotification>`,
});

export const WarningWithDefaultAlert = (args) => ({
  components: { UiNotification, UiAlert },
  setup() { return { ...args }; },
  template: `<UiNotification :type="type">
    <UiAlert 
      type="default" 
      class="ui-alert--secondary"
    >
      {{ content }}
    </UiAlert>
  </UiNotification>`,
});
WarningWithDefaultAlert.args = {
  type: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
};

export const WithLink = (args) => ({
  components: {
    UiNotification, UiAlert, UiIcon, UiLink,
  },
  setup() { return { ...args }; },
  template: `<UiNotification :type="type">
    <UiAlert 
      :type="type" 
      class="ui-alert--secondary"
    >
      {{ content }}
    </UiAlert>
    <UiLink 
      :href="href" 
      target="_blank"
      class="ui-link--has-icon"
      style="display: inline-flex; margin: var(--space-4) 0 0 var(--space-36);"
    >
      Skip this question
      <UiIcon 
        icon="chevronRight"
        class="ui-link__icon ui-link__icon--right"
      />
    </UiLink>
  </UiNotification>`,
});
WithLink.args = {
  content: 'Thank you. We’ll review this question as soon as possible',
  type: 'success',
  href: 'https://infermedica.com/',
};
WithLink.argTypes = {
  href: {
    control: 'text',
  },
};